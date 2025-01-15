import { dependencyManager } from '../../shared/dependencies/dependencyManager';
import IEvent from '../../shared/domain/interfaces/IEvent.interface';
import { AppointmentBookingEvents } from '../../shared/enums/appointmentBookingEvents.enum';
import { InMemoryEventBus } from '../../shared/infrastructure/inMemoryEventBus';
import INotificationService from './INotification.service';

export default class NotificationService implements INotificationService {
  private eventBus: InMemoryEventBus =
    dependencyManager.injectDependency<InMemoryEventBus>('inMemoryEventBus');

  constructor() {
    
    this.eventBus.subscribe(
      AppointmentBookingEvents.APPOINTMENT_BOOKED,
      this.sendAppointmentBookedNotification.bind(this),
    );
    this.eventBus.subscribe(
      AppointmentBookingEvents.APPOINTMENT_STATUS_CHANGED,
      this.sendAppointmentStatusChangedNotification.bind(this),
    );
  }

  async sendAppointmentBookedNotification(event: IEvent): Promise<void> {
    await this.sendNotificationToPatient(event);
    await this.sendNotificationToDoctor(event);
  }

  async sendAppointmentStatusChangedNotification(event: IEvent): Promise<void> {
    await this.sendNotificationToPatient(event);
    await this.sendNotificationToDoctor(event);
  }

  async sendNotificationToPatient(event: IEvent): Promise<void> {
    console.log('Sending notification to patient:', event.eventData);
  }

  async sendNotificationToDoctor(event: IEvent): Promise<void> {
    console.log('Sending notification to doctor:', event.eventData);
  }
}
