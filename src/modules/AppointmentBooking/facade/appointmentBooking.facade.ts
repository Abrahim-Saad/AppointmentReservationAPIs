import AppointmentBookingDTO from '../../../shared/dto/appointmentBooking.dto';
import IListUpcomingAppointmentBookingsUseCase from '../internals/application/usecases/listUpcomingAppointmentBookings/IListUpcomingAppointmentBookings.usecase';
import { container } from '../internals/shared/container';
import IAppointmentBookingFacade from './IAppointmentBooking.facade';

export default class AppointmentBookingFacade implements IAppointmentBookingFacade
{
  private listUpcomingAppointmentBookingsUseCase: IListUpcomingAppointmentBookingsUseCase =
    container.resolve<IListUpcomingAppointmentBookingsUseCase>(
      'listUpcomingAppointmentBookingsUseCase',
    );

  listUpcomingAppointmentBookings(): AppointmentBookingDTO[] {
    return this.listUpcomingAppointmentBookingsUseCase.execute();
  }
}
