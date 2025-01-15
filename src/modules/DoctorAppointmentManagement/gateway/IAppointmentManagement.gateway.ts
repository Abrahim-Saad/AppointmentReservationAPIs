import AppointmentBookingDTO from '../../../shared/dto/appointmentBooking.dto';
import UpdateAppointmentBookingStatusDTO from '../../AppointmentBooking/internals/presentation/dtos/updateAppointmentBookingStatus.dto';

export default interface IAppointmentManagementGateway {
  listUpcomingAppointmentBookings(): AppointmentBookingDTO[];
  updateAppointmentBookingStatus(
    appointmentBookingStatusDTO: UpdateAppointmentBookingStatusDTO,
  ): void;
}
