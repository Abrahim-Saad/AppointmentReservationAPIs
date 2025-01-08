import IAppointmentBookingGateway from "./IAppointmentBooking.gateway";
import SlotDTO from "../../../shared/dto/slot.dto";
import ISlotFacade from "../../DoctorAvailability/facade/ISlot.facade";
import { container } from "../internals/shared/container";

export default class AppointmentBookingGateway implements IAppointmentBookingGateway {
    private slotFacade: ISlotFacade = container.resolve<ISlotFacade>('slotFacade');

    public listDoctorAvailableSlots(): SlotDTO[] {
        return this.slotFacade.listDoctorAvailableSlots();
    }
};