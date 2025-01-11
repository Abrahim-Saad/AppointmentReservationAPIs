import AppointmentBookingDTO from '../../../shared/dto/appointmentBooking.dto';

export default interface IAppointmentBookingFacade {
  listUpcomingAppointmentBookings(): AppointmentBookingDTO[];
}
