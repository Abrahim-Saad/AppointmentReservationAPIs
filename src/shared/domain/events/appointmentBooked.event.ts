import AppointmentBookingDTO from '../../dto/appointmentBooking.dto';
import IEvent from '../interfaces/IEvent.interface';
import { randomUUID } from 'crypto';

export default class AppointmentBookedEvent implements IEvent {
    eventID: string;
    eventName: string;
    occurredOn: Date;
    eventData: AppointmentBookingDTO;

    constructor(eventData: AppointmentBookingDTO) {
        this.eventID = randomUUID();
        this.occurredOn = new Date(Date.now());
        this.eventData = eventData;
        this.eventName = 'AppointmentBooked'; // TODO: create an enum for the events
    }
    public getEventID(): string {
        return this.eventID;
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