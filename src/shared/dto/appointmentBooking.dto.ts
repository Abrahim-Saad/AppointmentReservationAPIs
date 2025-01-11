export default interface AppointmentBookingDTO {
    ID: string;
    slotID: string;
    slotTime: string;
    patientID: string;
    patientName: string;
    reservedAt: Date;
    appointmentStatus: string;
}   