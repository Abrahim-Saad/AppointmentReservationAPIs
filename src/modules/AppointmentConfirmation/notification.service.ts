import { dependencyManager } from '../../shared/dependencies/dependencyManager';
import IEvent from '../../shared/domain/interfaces/IEvent.interface';
import { InMemoryEventBus } from '../../shared/infrastructure/inMemoryEventBus';
import INotificationService from './INotification.service';

export default class NotificationService implements INotificationService {
  private eventBus: InMemoryEventBus = dependencyManager.injectDependency<InMemoryEventBus>('inMemoryEventBus');

  constructor() {
    // TODO: create an enum for the events
    this.eventBus.subscribe(
      'AppointmentBooked',
      this.sendNotification.bind(this),
    );
  }

  async sendNotification(event: IEvent): Promise<void> {
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
