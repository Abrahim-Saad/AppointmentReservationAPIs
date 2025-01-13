import AppointmentBookingDTO from '../../../../../../shared/dto/appointmentBooking.dto';
import IUpdateAppointmentBookingStatusDTO from '../../../../../AppointmentBooking/internals/presentation/dtos/IUpdateAppointmentBookingStatus.dto';

export default interface IAppointmentManagementRepository {
  listUpcomingAppointmentBookings(): AppointmentBookingDTO[];
  updateAppointmentBookingStatus(
    updateAppointmentBookingStatusDTO: IUpdateAppointmentBookingStatusDTO,
  ): void;
}
