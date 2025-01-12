import { log } from 'console';
import AppointmentBookingDTO from '../../../shared/dto/appointmentBooking.dto';
import IListUpcomingAppointmentBookingsUseCase from '../internals/application/usecases/listUpcomingAppointmentBookings/IListUpcomingAppointmentBookings.usecase';
import { container } from '../../../shared/container/container';
import IAppointmentBookingFacade from './IAppointmentBooking.facade';



export default class AppointmentBookingFacade implements IAppointmentBookingFacade
{
  private listUpcomingAppointmentBookingsUseCase: IListUpcomingAppointmentBookingsUseCase =
    container.resolve<IListUpcomingAppointmentBookingsUseCase>(
      'listUpcomingAppointmentBookingsUseCase',
    );

  listUpcomingAppointmentBookings(): AppointmentBookingDTO[] {
    log('AppointmentBookingFacade: listUpcomingAppointmentBookings');
    console.log(Object.getOwnPropertyNames(this.listUpcomingAppointmentBookingsUseCase));
    
    return this.listUpcomingAppointmentBookingsUseCase.execute();
  }
}
