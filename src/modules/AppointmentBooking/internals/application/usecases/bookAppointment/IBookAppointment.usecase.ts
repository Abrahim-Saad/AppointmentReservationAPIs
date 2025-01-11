import ICreateAppointmentBookingDTO from '../../../presentation/dtos/ICreateAppointmentBooking.dto';

export default interface IBookAppointmentUseCase {
  execute(createAppointmentBookingDTO: ICreateAppointmentBookingDTO): Promise<void>;
}
