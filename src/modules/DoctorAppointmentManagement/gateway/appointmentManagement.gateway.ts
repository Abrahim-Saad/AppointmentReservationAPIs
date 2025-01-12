import AppointmentBookingDTO from '../../../shared/dto/appointmentBooking.dto';
import IAppointmentBookingFacade from '../../AppointmentBooking/facade/IAppointmentBooking.facade';
import { container } from '../../../shared/container/container';
import IAppointmentManagementGateway from './IAppointmentManagement.gateway';


export default class AppointmentManagementGateway implements IAppointmentManagementGateway{

  private appointmentBookingFacade: IAppointmentBookingFacade = container.resolve<IAppointmentBookingFacade>('appointmentBookingFacade');

  listUpcomingAppointmentBookings(): AppointmentBookingDTO[] {
    return this.appointmentBookingFacade.listUpcomingAppointmentBookings();
  }
};