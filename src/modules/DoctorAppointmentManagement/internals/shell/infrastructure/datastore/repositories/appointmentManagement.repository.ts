import { dependencyManager } from '../../../../../../../shared/dependencies/dependencyManager';
import AppointmentBookingDTO from '../../../../../../../shared/dto/appointmentBooking.dto';
import UpdateAppointmentBookingStatusDTO from '../../../../../../AppointmentBooking/internals/presentation/dtos/updateAppointmentBookingStatus.dto';
import IAppointmentManagementGateway from '../../../../../gateway/IAppointmentManagement.gateway';
import IAppointmentManagementRepository from '../../../../core/domain/repositories/IAppointmentManagement.repository';

export default class AppointmentManagementRepository
  implements IAppointmentManagementRepository
{
  private appointmentManagementGateway: IAppointmentManagementGateway =
    dependencyManager.injectDependency<IAppointmentManagementGateway>(
      'appointmentManagementGateway',
    );

  listUpcomingAppointmentBookings(): AppointmentBookingDTO[] {
    return this.appointmentManagementGateway.listUpcomingAppointmentBookings();
  }

  updateAppointmentBookingStatus(
    updateAppointmentBookingStatusDTO: UpdateAppointmentBookingStatusDTO,
  ): void {
    this.appointmentManagementGateway.updateAppointmentBookingStatus(
      updateAppointmentBookingStatusDTO,
    );
  }
}
