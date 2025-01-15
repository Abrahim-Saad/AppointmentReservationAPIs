import { dependencyManager } from '../../../../../shared/dependencies/dependencyManager';
import AppointmentBookingDTO from '../../../../../shared/dto/appointmentBooking.dto';
import UpdateAppointmentBookingStatusDTO from '../../../../AppointmentBooking/internals/presentation/dtos/updateAppointmentBookingStatus.dto';
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
    updateAppointmentBookingStatusDTO: UpdateAppointmentBookingStatusDTO,
  ): void {
    this.appointmentManagementRepository.updateAppointmentBookingStatus(
      updateAppointmentBookingStatusDTO,
    );
  }
}
