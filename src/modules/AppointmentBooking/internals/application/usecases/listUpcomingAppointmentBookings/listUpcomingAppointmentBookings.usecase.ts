import AppointmentBookingDTO from '../../../../../../shared/dto/appointmentBooking.dto';
import { container } from '../../../shared/container';
import IAppointmentBookingRepository from '../../../domain/interfaces/IAppointmentBooking.repository';
import IListUpcomingAppointmentBookingsUseCase from './IListUpcomingAppointmentBookings.usecase';


export default class ListUpcomingAppointmentBookingsUseCase implements IListUpcomingAppointmentBookingsUseCase {
  private appointmentBookingRepo: IAppointmentBookingRepository = container.resolve<IAppointmentBookingRepository>('appointmentBookingRepository',);

  execute(): AppointmentBookingDTO[] {
    console.log('ListUpcomingAppointmentBookingsUseCase: execute');

    return this.appointmentBookingRepo.listUpcomingAppointmentBookings();
  };
};