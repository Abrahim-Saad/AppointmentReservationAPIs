import AppointmentBookingDTO from '../../dto/appointmentBooking.dto';
import IEvent from '../interfaces/IEvent.interface';
import { randomUUID } from 'crypto';

export default class AppointmentBookedEvent implements IEvent {
    eventId: string;
    eventName: string;
    occurredOn: Date;
    eventData: AppointmentBookingDTO;

    constructor(eventData: AppointmentBookingDTO) {
        this.eventId = randomUUID();
        this.occurredOn = new Date(Date.now());
        this.eventData = eventData;
        this.eventName = 'AppointmentBooked';
    }
    public getEventId(): string {
        return this.eventId;
    }

    public getEventName(): string {
        return this.eventName;
    }

    public getOccurredOn(): Date {
        return this.occurredOn;
    }

    public getEventData(): AppointmentBookingDTO {
        return this.eventData;
    }

    public setEventData(eventData: AppointmentBookingDTO): void {
        this.eventData = eventData;
    }
}