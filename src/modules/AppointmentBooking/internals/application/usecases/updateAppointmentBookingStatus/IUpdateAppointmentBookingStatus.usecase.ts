import UpdateAppointmentBookingStatusDTO from '../../../presentation/dtos/updateAppointmentBookingStatus.dto';

export default interface IUpdateAppointmentBookingStatusUseCase {
  execute(
    updateAppointmentBookingStatusDTO: UpdateAppointmentBookingStatusDTO,
  ): Promise<void>;
}
