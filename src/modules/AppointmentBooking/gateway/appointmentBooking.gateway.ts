import IAppointmentBookingGateway from "./IAppointmentBooking.gateway";
import SlotDto from "../../../shared/dto/slot.dto";
import ISlotFacade from "../../DoctorAvailability/facade/ISlot.facade";

export default class AppointmentBookingGateway implements IAppointmentBookingGateway {

    private slotFacade: ISlotFacade;

    constructor(slotFacade: ISlotFacade) {
        
        this.slotFacade = slotFacade;
    }

    public listDoctorAvailableSlots(): SlotDto[] {
        return this.slotFacade.listDoctorAvailableSlots();
    }
};