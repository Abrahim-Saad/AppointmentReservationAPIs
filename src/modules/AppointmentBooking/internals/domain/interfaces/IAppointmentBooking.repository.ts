import AppointmentBookingDTO from '../../../../../shared/dto/appointmentBooking.dto';
import ICreateAppointmentBookingDTO from '../../presentation/dtos/ICreateAppointmentBooking.dto';
import IUpdateAppointmentBookingStatusDTO from '../../presentation/dtos/IUpdateAppointmentBookingStatus.dto';


export default interface IAppointmentBookingRepository {
    createAppointmentBooking(createAppointmentBookingDTO: ICreateAppointmentBookingDTO): AppointmentBookingDTO;
    getAppointmentBookingById(id: string): AppointmentBookingDTO;
    updateAppointmentBookingStatus(updateAppointmentBookingStatusDTO: IUpdateAppointmentBookingStatusDTO): void;
    listAppointmentBookings(): AppointmentBookingDTO[];
}

