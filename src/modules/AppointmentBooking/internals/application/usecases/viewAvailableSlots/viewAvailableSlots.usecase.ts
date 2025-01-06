import SlotDto from '../../../../../../shared/dto/slot.dto';
import IAppointmentBookingGateway from '../../../../gateway/IAppointmentBooking.gateway';
import IViewAvailableSlotsUseCase from './IViewAvailableSlots.usecase';


export default class ViewAvailableSlotsUseCase implements IViewAvailableSlotsUseCase {
    private appointmentBookingGateway: IAppointmentBookingGateway;

    constructor(slotGateway: IAppointmentBookingGateway) {
        this.appointmentBookingGateway = slotGateway;
    };

    execute(): SlotDto[] {
        return this.appointmentBookingGateway.listDoctorAvailableSlots();
    };
};