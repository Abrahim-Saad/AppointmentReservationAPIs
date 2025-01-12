import { container } from '../../shared/container/container';
import IEvent from '../../shared/domain/interfaces/IEvent.interface';
import { InMemoryEventBus } from '../../shared/infrastructure/inMemoryEventBus';
import INotificationService from './INotification.service';

export default class NotificationService implements INotificationService {
  private eventBus: InMemoryEventBus = container.resolve<InMemoryEventBus>('inMemoryEventBus');

  constructor() {
    // TODO: create an enum for the events
    this.eventBus.subscribe(
      'AppointmentBooked',
      this.sendNotification.bind(this),
    );
  }

  async sendNotification(event: IEvent): Promise<void> {
    console.log('Sending notification:', event.eventData);
  }
}
