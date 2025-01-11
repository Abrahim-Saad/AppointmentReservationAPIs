import AppoinmentBookingDTO from '../../../shared/dto/appointmentBooking.dto';

export default interface IAppointmentManagmentGateway {
  listUpcomingAppointmentBookings(): AppoinmentBookingDTO[];
}
