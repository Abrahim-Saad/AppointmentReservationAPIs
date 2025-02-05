import AppointmentBookingDTO from '../../../../../../shared/dto/appointmentBooking.dto';
import { dependencyManager } from '../../../../../../shared/dependencies/dependencyManager';
import IAppointmentBookingRepository from '../../../domain/interfaces/IAppointmentBooking.repository';
import IListUpcomingAppointmentBookingsUseCase from './IListUpcomingAppointmentBookings.usecase';


export default class ListUpcomingAppointmentBookingsUseCase implements IListUpcomingAppointmentBookingsUseCase {
  private appointmentBookingRepo: IAppointmentBookingRepository = dependencyManager.injectDependency<IAppointmentBookingRepository>('appointmentBookingRepository',);

  execute(): AppointmentBookingDTO[] {

    return this.appointmentBookingRepo.listUpcomingAppointmentBookings();
  };
};