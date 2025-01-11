import AppoinmentBookingDTO from '../../../shared/dto/appointmentBooking.dto';
import AppointmentBookingFacade from '../../AppointmentBooking/facade/appointmentBooking.facade';
import IAppointmentBookingFacade from '../../AppointmentBooking/facade/IAppointmentBooking.facade';
import { container } from '../internals/shared/container';
import IAppointmentManagmentGateway from './IAppointmentManagment.gateway';

container.register<IAppointmentBookingFacade>('appointmentBookingFacade', new AppointmentBookingFacade());

export default class AppointmentManagmentGateway implements IAppointmentManagmentGateway{

  private appointmentBookingFacade: AppointmentBookingFacade = container.resolve<AppointmentBookingFacade>('appointmentBookingFacade');

  listUpcomingAppointmentBookings(): AppoinmentBookingDTO[] {
    return this.appointmentBookingFacade.listUpcomingAppointmentBookings();
  }
};