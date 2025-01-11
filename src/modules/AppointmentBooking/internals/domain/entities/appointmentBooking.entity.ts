import { randomUUID } from 'crypto';
import { AppointmentStatus } from '../enums/appointmentStatus.enum';

export default class AppointmentBooking {
    private ID: string;
    private slotID: string;
    private slotTime: string;
    private patientID: string;
    private patientName: string;
    private reservedAt: Date;
    private appointmentStatus: string;

    constructor(slotID: string, slotTime: string, patientID: string, patientName: string) {
        this.ID = randomUUID();
        this.slotID = slotID;
        this.slotTime = slotTime;
        this.patientID = patientID;
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

    public getSlotTime(): string {
        return this.slotTime;
    }

    public setSlotTime(slotTime: string): void {
        this.slotTime = slotTime;
    }

    public getPatientID(): string {
        return this.patientID;
    }

    public setPatientID(patientID: string): void {
        this.patientID = patientID;
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