import { randomUUID } from 'crypto';
import { AppointmentStatus } from '../enums/appointmentStatus.enum';

export default class AppointmentBooking {
    private ID: string;
    private slotID: string;
    private patientId: string;
    private patientName: string;
    private reservedAt: Date;
    private appointmentStatus: string;

    constructor(slotID: string, patientId: string, patientName: string) {
        this.ID = randomUUID();
        this.slotID = slotID;
        this.patientId = patientId;
        this.patientName = patientName;
        this.reservedAt = new Date(Date.now());
        this.appointmentStatus = AppointmentStatus.BOOKED
    }

    

    public getID(): string {
        return this.ID;
    }

    public getSlotID(): string {
        return this.slotID;
    }

    public setSlotID(slotID: string): void {
        this.slotID = slotID;
    }

    public getPatientId(): string {
        return this.patientId;
    }

    public setPatientId(patientId: string): void {
        this.patientId = patientId;
    }

    public getPatientName(): string {
        return this.patientName;
    }

    public setPatientName(patientName: string): void {
        this.patientName = patientName;
    }

    public getReservedAt(): Date {
        return this.reservedAt;
    }

    public setReservedAt(reservedAt: Date): void {
        this.reservedAt = reservedAt;
    }

    public getAppointmentStatus(): string {
        return this.appointmentStatus;
    }

    public setAppointmentStatus(appointmentStatus: string): void {
        this.appointmentStatus = appointmentStatus;
    }

}