import { dependencyManager } from '../../../../../../shared/dependencies/dependencyManager';
import AppointmentBookedEvent from '../../../../../../shared/domain/events/appointmentBooked.event';
import IEvent from '../../../../../../shared/domain/interfaces/IEvent.interface';
import AppointmentBookingDTO from '../../../../../../shared/dto/appointmentBooking.dto';
import SlotDTO from '../../../../../../shared/dto/slot.dto';
import { InMemoryEventBus } from '../../../../../../shared/infrastructure/inMemoryEventBus';
import IAppointmentBookingGateway from '../../../../gateway/IAppointmentBooking.gateway';
import IAppointmentBookingRepository from '../../../domain/interfaces/IAppointmentBooking.repository';
import CreateAppointmentBookingDTO from '../../../presentation/dtos/createAppointmentBooking.dto';
import IBookAppointmentUseCase from './IBookAppointment.usecase';

export default class BookAppointmentUseCase implements IBookAppointmentUseCase {
  private appointmentBookingRepo: IAppointmentBookingRepository =
  dependencyManager.injectDependency<IAppointmentBookingRepository>(
      'appointmentBookingRepository',
    );
  private appointmentBookingGateway: IAppointmentBookingGateway =
  dependencyManager.injectDependency<IAppointmentBookingGateway>(
      'appointmentBookingGateway',
    );
  private eventBus: InMemoryEventBus =
  dependencyManager.injectDependency<InMemoryEventBus>('inMemoryEventBus');

  private validateSlot(slot: SlotDTO | null) {
    if (!slot?.time) {
      throw new Error('Slot not found');
    }
    if (slot && slot.isReserved) {
      throw new Error('Slot is already reserved');
    }
  }

  async execute(
    createAppointmentBookingDTO: CreateAppointmentBookingDTO,
  ): Promise<void> {
    const slot = this.appointmentBookingGateway.getSlotByID(
      createAppointmentBookingDTO.slotID,
    );
    this.validateSlot(slot);
    createAppointmentBookingDTO.slotTime = slot!.time;
    const appointmentBooking: AppointmentBookingDTO =
      this.appointmentBookingRepo.createAppointmentBooking(
        createAppointmentBookingDTO,
      );
    const appointmentBookedEvent: IEvent = new AppointmentBookedEvent(
      appointmentBooking,
    );
    await this.eventBus.publish(appointmentBookedEvent);
  }
}
