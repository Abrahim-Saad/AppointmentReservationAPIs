import ISlotFacade from "./ISlot.facade";
import SlotService from "../internals/services/slot.service";
import SlotRepo from "../internals/repositories/slot.repository";
import SlotDto from "../../../shared/dto/slot.dto";
import Slot from "../internals/models/slot.model";



export default class SlotFacade implements ISlotFacade {
    private slotService: SlotService;

    constructor() {
        this.slotService = new SlotService(new SlotRepo());
    }

     listDoctorAvailableSlots(): SlotDto[] {
        const slots : Slot[] = this.slotService.listDoctorAvailableSlots();
        const slotDtos: SlotDto[] = slots.map(slot => ({
            ID: slot.id,
            time: slot.slotTime,
            isReserved: slot.reserved,
            cost: slot.slotCost
        }));
        return slotDtos;
    }

    
}