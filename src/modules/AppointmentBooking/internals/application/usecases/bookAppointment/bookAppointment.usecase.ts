import { container as EventBusContainer } from '../../../../../../shared/container/container';
import AppointmentBookedEvent from '../../../../../../shared/domain/events/appointmentBooked.event';
import IEvent from '../../../../../../shared/domain/interfaces/IEvent.interface';
import AppointmentBookingDTO from '../../../../../../shared/dto/appointmentBooking.dto';
import SlotDTO from '../../../../../../shared/dto/slot.dto';
import { InMemoryEventBus } from '../../../../../../shared/infrastructure/inMemoryEventBus';
import IAppointmentBookingGateway from '../../../../gateway/IAppointmentBooking.gateway';
import { container as AppointmentBookingContainer } from '../../../../internals/shared/container';
import IAppointmentBookingRepository from '../../../domain/interfaces/IAppointmentBooking.repository';
import ICreateAppointmentBookingDTO from '../../../presentation/dtos/ICreateAppointmentBooking.dto';
import IBookAppointmentUseCase from './IBookAppointment.usecase';

export default class BookAppointmentUseCase implements IBookAppointmentUseCase {
  private appointmentBookingRepo: IAppointmentBookingRepository =
    AppointmentBookingContainer.resolve<IAppointmentBookingRepository>(
      'appointmentBookingRepository',
    );
  private appointmentBookingGateway: IAppointmentBookingGateway =
    AppointmentBookingContainer.resolve<IAppointmentBookingGateway>(
      'appointmentBookingGateway',
    );
  private eventBus: InMemoryEventBus =
    EventBusContainer.resolve<InMemoryEventBus>('inMemoryEventBus');

  private validateSlot(slot: SlotDTO | null) {
    if (!slot?.time) {
      throw new Error('Slot not found');
    }
    if (slot && slot.isReserved) {
      throw new Error('Slot is already reserved');
    }
  }

  async execute(
    createAppointmentBookingDTO: ICreateAppointmentBookingDTO,
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
    console.log(`🚀 ~ file: bookAppointment.usecase.ts:43 ~ BookAppointmentUseCase ~ appointmentBooking:`, appointmentBooking)
    const appointmentBookedEvent: IEvent = new AppointmentBookedEvent(
      appointmentBooking,
    );
    await this.eventBus.publish(appointmentBookedEvent);
  }
}
