import CreateAppointmentBookingDTO from '../../../presentation/dtos/createAppointmentBooking.dto';

export default interface IBookAppointmentUseCase {
  execute(createAppointmentBookingDTO: CreateAppointmentBookingDTO): Promise<void>;
}
