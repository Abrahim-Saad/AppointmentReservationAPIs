import { dependencyManager } from '../../../shared/dependencies/dependencyManager';
import AppointmentBookingDTO from '../../../shared/dto/appointmentBooking.dto';
import IListUpcomingAppointmentBookingsUseCase from '../internals/application/usecases/listUpcomingAppointmentBookings/IListUpcomingAppointmentBookings.usecase';
import IUpdateAppointmentBookingStatusUseCase from '../internals/application/usecases/updateAppointmentBookingStatus/IUpdateAppointmentBookingStatus.usecase';
import UpdateAppointmentBookingStatusDTO from '../internals/presentation/dtos/updateAppointmentBookingStatus.dto';
import IAppointmentBookingFacade from './IAppointmentBooking.facade';

export default class AppointmentBookingFacade
  implements IAppointmentBookingFacade
{
  private listUpcomingAppointmentBookingsUseCase: IListUpcomingAppointmentBookingsUseCase =
    dependencyManager.injectDependency<IListUpcomingAppointmentBookingsUseCase>(
      'listUpcomingAppointmentBookingsUseCase',
    );

  private updateAppointmentBookingStatusUseCase: IUpdateAppointmentBookingStatusUseCase =
    dependencyManager.injectDependency<IUpdateAppointmentBookingStatusUseCase>(
      'updateAppointmentBookingStatusUseCase',
    );

  listUpcomingAppointmentBookings(): AppointmentBookingDTO[] {
    return this.listUpcomingAppointmentBookingsUseCase.execute();
  }

  updateAppointmentBookingStatus(
    appointmentBookingStatus: UpdateAppointmentBookingStatusDTO,
  ): void {
    this.updateAppointmentBookingStatusUseCase.execute(
      appointmentBookingStatus,
    );
  }
}
