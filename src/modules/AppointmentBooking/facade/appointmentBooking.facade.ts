import { log } from 'console';
import AppointmentBookingDTO from '../../../shared/dto/appointmentBooking.dto';
import IListUpcomingAppointmentBookingsUseCase from '../internals/application/usecases/listUpcomingAppointmentBookings/IListUpcomingAppointmentBookings.usecase';
import ListUpcomingAppointmentBookingsUseCase from '../internals/application/usecases/listUpcomingAppointmentBookings/listUpcomingAppointmentBookings.usecase';
import { container } from '../internals/shared/container';
import IAppointmentBookingFacade from './IAppointmentBooking.facade';

container.register('listUpcomingAppointmentBookingsUseCase', new ListUpcomingAppointmentBookingsUseCase());

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
