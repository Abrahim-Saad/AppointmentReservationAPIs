export default interface AppointmentBookingDTO {
    ID: string;
    slotID: string;
    patientId: string;
    patientName: string;
    reservedAt: Date;
    appointmentStatus: string;
}   