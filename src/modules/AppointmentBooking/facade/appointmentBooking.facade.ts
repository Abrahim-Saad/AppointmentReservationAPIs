import AppointmentBookingDTO from '../../../shared/dto/appointmentBooking.dto';
import IListUpcomingAppointmentBookingsUseCase from '../internals/application/usecases/listUpcomingAppointmentBookings/IListUpcomingAppointmentBookings.usecase';
import { dependencyManager } from '../../../shared/dependencies/dependencyManager';
import IAppointmentBookingFacade from './IAppointmentBooking.facade';



export default class AppointmentBookingFacade implements IAppointmentBookingFacade {
  private listUpcomingAppointmentBookingsUseCase: IListUpcomingAppointmentBookingsUseCase =
    dependencyManager.injectDependency<IListUpcomingAppointmentBookingsUseCase>(
      'listUpcomingAppointmentBookingsUseCase',
    );

  listUpcomingAppointmentBookings(): AppointmentBookingDTO[] {

    return this.listUpcomingAppointmentBookingsUseCase.execute();
  }
}
