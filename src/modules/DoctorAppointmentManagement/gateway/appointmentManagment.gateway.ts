import AppoinmentBookingDTO from '../../../shared/dto/appointmentBooking.dto';
import IAppointmentBookingFacade from '../../AppointmentBooking/facade/IAppointmentBooking.facade';
import { container } from '../../../shared/container/container';
import IAppointmentManagmentGateway from './IAppointmentManagment.gateway';


export default class AppointmentManagmentGateway implements IAppointmentManagmentGateway{

  private appointmentBookingFacade: IAppointmentBookingFacade = container.resolve<IAppointmentBookingFacade>('appointmentBookingFacade');

  listUpcomingAppointmentBookings(): AppoinmentBookingDTO[] {
    return this.appointmentBookingFacade.listUpcomingAppointmentBookings();
  }
};