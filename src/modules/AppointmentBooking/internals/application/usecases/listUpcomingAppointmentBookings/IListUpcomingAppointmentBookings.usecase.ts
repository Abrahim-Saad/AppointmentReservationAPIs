import AppointmentBookingDTO from '../../../../../../shared/dto/appointmentBooking.dto';

export default interface IListUpcomingAppointmentBookingsUseCase {
  execute(): AppointmentBookingDTO[];
}
