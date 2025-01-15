import AppointmentBookingDTO from '../../../../../../shared/dto/appointmentBooking.dto';
import UpdateAppointmentBookingStatusDTO from '../../../../../AppointmentBooking/internals/presentation/dtos/updateAppointmentBookingStatus.dto';

export default interface IAppointmentManagementRepository {
  listUpcomingAppointmentBookings(): AppointmentBookingDTO[];
  updateAppointmentBookingStatus(
    updateAppointmentBookingStatusDTO: UpdateAppointmentBookingStatusDTO,
  ): void;
}
