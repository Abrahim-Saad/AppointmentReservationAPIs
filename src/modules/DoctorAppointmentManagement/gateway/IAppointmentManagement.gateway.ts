import AppointmentBookingDTO from '../../../shared/dto/appointmentBooking.dto';

export default interface IAppointmentManagementGateway {
  listUpcomingAppointmentBookings(): AppointmentBookingDTO[];
}
