import AppointmentBookingDTO from '../../../shared/dto/appointmentBooking.dto';
import IAppointmentBookingFacade from '../../AppointmentBooking/facade/IAppointmentBooking.facade';
import { dependencyManager } from '../../../shared/dependencies/dependencyManager';
import IAppointmentManagementGateway from './IAppointmentManagement.gateway';
import IUpdateAppointmentBookingStatusDTO from '../../AppointmentBooking/internals/presentation/dtos/IUpdateAppointmentBookingStatus.dto';


export default class AppointmentManagementGateway implements IAppointmentManagementGateway{
  private appointmentBookingFacade: IAppointmentBookingFacade = dependencyManager.injectDependency<IAppointmentBookingFacade>('appointmentBookingFacade');

  listUpcomingAppointmentBookings(): AppointmentBookingDTO[] {
    return this.appointmentBookingFacade.listUpcomingAppointmentBookings();
  }

  updateAppointmentBookingStatus(appointmentBookingStatusDTO: IUpdateAppointmentBookingStatusDTO): void {
    this.appointmentBookingFacade.updateAppointmentBookingStatus(appointmentBookingStatusDTO);
  }
};