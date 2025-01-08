import { AppointmentStatus } from '../../domain/enums/appointmentStatus.enum'


export default interface IUpdateAppointmentBookingStatusDTO {
    ID: string;
    appointmentStatus: AppointmentStatus.COMPLETED | AppointmentStatus.CANCELLED;
}