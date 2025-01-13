import AppointmentBookingDTO from '../../../shared/dto/appointmentBooking.dto';
import IUpdateAppointmentBookingStatusDTO from '../internals/presentation/dtos/IUpdateAppointmentBookingStatus.dto';

export default interface IAppointmentBookingFacade {
  listUpcomingAppointmentBookings(): AppointmentBookingDTO[];
  updateAppointmentBookingStatus(appointmentBookingStatus: IUpdateAppointmentBookingStatusDTO): void;
}
