import AppointmentBookingDTO from '../../../shared/dto/appointmentBooking.dto';
import IAppointmentBookingFacade from '../../AppointmentBooking/facade/IAppointmentBooking.facade';
import { dependencyManager } from '../../../shared/dependencies/dependencyManager';
import IAppointmentManagementGateway from './IAppointmentManagement.gateway';
import UpdateAppointmentBookingStatusDTO from '../../AppointmentBooking/internals/presentation/dtos/updateAppointmentBookingStatus.dto';


export default class AppointmentManagementGateway implements IAppointmentManagementGateway{
  private appointmentBookingFacade: IAppointmentBookingFacade = dependencyManager.injectDependency<IAppointmentBookingFacade>('appointmentBookingFacade');

  listUpcomingAppointmentBookings(): AppointmentBookingDTO[] {
    return this.appointmentBookingFacade.listUpcomingAppointmentBookings();
  }

  updateAppointmentBookingStatus(appointmentBookingStatusDTO: UpdateAppointmentBookingStatusDTO): void {
    this.appointmentBookingFacade.updateAppointmentBookingStatus(appointmentBookingStatusDTO);
  }
};