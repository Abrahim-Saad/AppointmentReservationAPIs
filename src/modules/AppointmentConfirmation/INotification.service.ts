import IEvent from '../../shared/domain/interfaces/IEvent.interface';

export default interface INotificationService {
  sendAppointmentBookedNotification(event: IEvent): Promise<void>;
  sendAppointmentStatusChangedNotification(event: IEvent): Promise<void>;
}
