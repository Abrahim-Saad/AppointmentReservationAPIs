import SlotDTO from '../../../../../../shared/dto/slot.dto';
import { container } from '../../../../internals/shared/container';
import IAppointmentBookingGateway from '../../../../gateway/IAppointmentBooking.gateway';
import IViewAvailableSlotsUseCase from './IViewAvailableSlots.usecase';


export default class ViewAvailableSlotsUseCase implements IViewAvailableSlotsUseCase {
    private appointmentBookingGateway: IAppointmentBookingGateway = container.resolve<IAppointmentBookingGateway>('appointmentBookingGateway')

    execute(): SlotDTO[] {
        return this.appointmentBookingGateway.listDoctorAvailableSlots();
    };
};