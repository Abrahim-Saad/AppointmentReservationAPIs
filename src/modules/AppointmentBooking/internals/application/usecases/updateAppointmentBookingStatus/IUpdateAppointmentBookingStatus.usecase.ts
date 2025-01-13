import IUpdateAppointmentBookingStatusDTO from '../../../presentation/dtos/IUpdateAppointmentBookingStatus.dto';

export default interface IUpdateAppointmentBookingStatusUseCase {
  execute(
    updateAppointmentBookingStatusDTO: IUpdateAppointmentBookingStatusDTO,
  ): Promise<void>;
}
