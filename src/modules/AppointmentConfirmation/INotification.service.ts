import IEvent from '../../shared/domain/interfaces/IEvent.interface';

export default interface INotificationService {
  sendNotification(event: IEvent): Promise<void>;
}
