import SlotDTO from '../../../shared/dto/slot.dto';
import Slot from '../internals/models/slot.model';
import SlotService from '../internals/services/slot.service';
import { dependencyManager } from '../../../shared/dependencies/dependencyManager';
import ISlotFacade from './ISlot.facade';

export default class SlotFacade implements ISlotFacade {
  private slotService: SlotService =
    dependencyManager.injectDependency<SlotService>('slotService');

  listDoctorAvailableSlots(): SlotDTO[] {
    const slots: Slot[] = this.slotService.listDoctorAvailableSlots();
    const slotDTOs: SlotDTO[] = slots.map((slot: Slot) => {
      return {
        ID: slot.getID(),
        time: slot.getSlotTime(),
        isReserved: slot.getIsReserved(),
        cost: slot.getSlotCost(),
      };
    });
    return slotDTOs;
  }

  getSlotByID(slotID: string): SlotDTO | null {
    const slot = this.slotService.getSlotByID(slotID);
    if (slot) {
      return {
        ID: slot.getID(),
        time: slot.getSlotTime(),
        isReserved: slot.getIsReserved(),
        cost: slot.getSlotCost(),
      };
    }
    return null;
  }
}
