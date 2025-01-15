import { AppointmentStatus } from '../../domain/enums/appointmentStatus.enum'


export default interface UpdateAppointmentBookingStatusDTO {
    ID: string;
    appointmentStatus: AppointmentStatus.COMPLETED | AppointmentStatus.CANCELLED;
}