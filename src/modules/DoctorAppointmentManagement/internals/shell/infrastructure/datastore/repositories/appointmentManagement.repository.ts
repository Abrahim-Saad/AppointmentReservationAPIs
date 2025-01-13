import { dependencyManager } from '../../../../../../../shared/dependencies/dependencyManager';
import AppointmentBookingDTO from '../../../../../../../shared/dto/appointmentBooking.dto';
import IUpdateAppointmentBookingStatusDTO from '../../../../../../AppointmentBooking/internals/presentation/dtos/IUpdateAppointmentBookingStatus.dto';
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
    updateAppointmentBookingStatusDTO: IUpdateAppointmentBookingStatusDTO,
  ): void {
    this.appointmentManagementGateway.updateAppointmentBookingStatus(
      updateAppointmentBookingStatusDTO,
    );
  }
}
