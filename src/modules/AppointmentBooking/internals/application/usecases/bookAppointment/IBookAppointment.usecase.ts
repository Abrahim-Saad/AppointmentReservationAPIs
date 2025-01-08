import AppointmentBookingDTO from '../../../../../../shared/dto/appointmentBooking.dto';
import SlotDTO from '../../../../../../shared/dto/slot.dto';
import ICreateAppointmentBookingDTO from '../../../presentation/dtos/ICreateAppointmentBooking.dto';


export default interface IBookAppointmentUseCase {
    execute(createAppointmentBookingDTO: ICreateAppointmentBookingDTO): void;
};