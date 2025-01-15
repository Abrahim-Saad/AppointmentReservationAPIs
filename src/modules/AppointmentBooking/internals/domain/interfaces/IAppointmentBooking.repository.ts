import AppointmentBookingDTO from '../../../../../shared/dto/appointmentBooking.dto';
import CreateAppointmentBookingDTO from '../../presentation/dtos/createAppointmentBooking.dto';
import UpdateAppointmentBookingStatusDTO from '../../presentation/dtos/updateAppointmentBookingStatus.dto';

export default interface IAppointmentBookingRepository {
    createAppointmentBooking(createAppointmentBookingDTO: CreateAppointmentBookingDTO): AppointmentBookingDTO;
    getAppointmentBookingByID(ID: string): AppointmentBookingDTO | null;
    updateAppointmentBookingStatus(updateAppointmentBookingStatusDTO: UpdateAppointmentBookingStatusDTO): void;
    listAppointmentBookings(): AppointmentBookingDTO[];
    listUpcomingAppointmentBookings(): AppointmentBookingDTO[];
}
