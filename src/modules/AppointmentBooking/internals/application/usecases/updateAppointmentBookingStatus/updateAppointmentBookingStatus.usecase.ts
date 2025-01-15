import { dependencyManager } from '../../../../../../shared/dependencies/dependencyManager';
import AppointmentBookingStatusChangedEvent from '../../../../../../shared/domain/events/appointmentBookingStatusChanged.event';
import IEvent from '../../../../../../shared/domain/interfaces/IEvent.interface';
import AppointmentBookingDTO from '../../../../../../shared/dto/appointmentBooking.dto';
import { InMemoryEventBus } from '../../../../../../shared/infrastructure/inMemoryEventBus';
import { AppointmentStatus } from '../../../domain/enums/appointmentStatus.enum';
import IAppointmentBookingRepository from '../../../domain/interfaces/IAppointmentBooking.repository';
import UpdateAppointmentBookingStatusDTO from '../../../presentation/dtos/updateAppointmentBookingStatus.dto';
import IUpdateAppointmentBookingStatusUseCase from './IUpdateAppointmentBookingStatus.usecase';

export default class UpdateAppointmentBookingStatusUseCase
  implements IUpdateAppointmentBookingStatusUseCase
{
  private appointmentBookingRepo: IAppointmentBookingRepository =
    dependencyManager.injectDependency<IAppointmentBookingRepository>(
      'appointmentBookingRepository',
    );

  private eventBus: InMemoryEventBus =
    dependencyManager.injectDependency<InMemoryEventBus>('inMemoryEventBus');

  private validate(
    appointmentBooking: AppointmentBookingDTO | null,
    appointmentStatus: AppointmentStatus,
  ) {
    if (!appointmentBooking) {
      throw new Error(`AppointmentBooking not found`);
    }
    if (
      appointmentBooking.appointmentStatus === AppointmentStatus.COMPLETED ||
      appointmentBooking.appointmentStatus === AppointmentStatus.CANCELLED
    ) {
      throw new Error(`Cannot update a non booked appointment`);
    }
    if (
      ![AppointmentStatus.COMPLETED, AppointmentStatus.CANCELLED].includes(
        appointmentStatus,
      )
    ) {
      throw new Error(`Invalid appointment status`);
    }
  }

  async execute({
    ID,
    appointmentStatus,
  }: UpdateAppointmentBookingStatusDTO): Promise<void> {
    const appointmentBooking =
      this.appointmentBookingRepo.getAppointmentBookingByID(ID);
    this.validate(appointmentBooking, appointmentStatus);
    this.appointmentBookingRepo.updateAppointmentBookingStatus({
      ID,
      appointmentStatus,
    });
    const appointmentBookingStatusChangedEvent: IEvent =
      new AppointmentBookingStatusChangedEvent(
        appointmentBooking as AppointmentBookingDTO,
      );
    appointmentBookingStatusChangedEvent.eventData.appointmentStatus =
      appointmentStatus;
    await this.eventBus.publish(appointmentBookingStatusChangedEvent);
  }
}
