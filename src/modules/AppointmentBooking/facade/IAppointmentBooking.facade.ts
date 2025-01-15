import AppointmentBookingDTO from '../../../shared/dto/appointmentBooking.dto';
import UpdateAppointmentBookingStatusDTO from '../internals/presentation/dtos/updateAppointmentBookingStatus.dto';

export default interface IAppointmentBookingFacade {
  listUpcomingAppointmentBookings(): AppointmentBookingDTO[];
  updateAppointmentBookingStatus(appointmentBookingStatus: UpdateAppointmentBookingStatusDTO): void;
}
