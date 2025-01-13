import { dependencyManager } from '../../../../../shared/dependencies/dependencyManager';
import AppointmentBookingDTO from '../../../../../shared/dto/appointmentBooking.dto';
import IUpdateAppointmentBookingStatusDTO from '../../../../AppointmentBooking/internals/presentation/dtos/IUpdateAppointmentBookingStatus.dto';
import IAppointmentManagementRepository from '../domain/repositories/IAppointmentManagement.repository';

export default class AppointmentManagementService {
  private appointmentManagementRepository: IAppointmentManagementRepository =
    dependencyManager.injectDependency<IAppointmentManagementRepository>(
      'appointmentManagementRepository',
    );

  listUpcomingAppointmentBookings(): AppointmentBookingDTO[] {
    return this.appointmentManagementRepository.listUpcomingAppointmentBookings();
  }

  updateAppointmentBookingStatus(
    updateAppointmentBookingStatusDTO: IUpdateAppointmentBookingStatusDTO,
  ): void {
    this.appointmentManagementRepository.updateAppointmentBookingStatus(
      updateAppointmentBookingStatusDTO,
    );
  }
}
