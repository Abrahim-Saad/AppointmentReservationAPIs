import ICreateSlotDTO from '../controllers/dtos/ICreateSlot.dto';
import ISlotRepo from '../interfaces/slot.interface';
import Slot from '../models/slot.model';

export default class SlotRepo implements ISlotRepo {
  // Seed dummy data for the sake of testing
  private slots: Slot[] = [
    new Slot('22/03/2025 05:30 pm', 900, true),
    new Slot('22/02/2025 04:30 pm', 100),
  ];

  public findAll(): Slot[] {
    return this.slots;
  }

  public findAvailableSlots(): Slot[] {
    return this.slots.filter((slot) => !slot.getIsReserved());
  }

  public create(createSlotDto: ICreateSlotDTO): void {
    const time = createSlotDto.time;
    const cost = createSlotDto.cost;
    const slotBody = new Slot(time, cost);
    this.slots.push(slotBody);
  }

  public updateSlotIsReservedStatus(slotId: string): void {
    this.slots = this.slots.map((slot) => {
      if (slot.getID() == slotId) {
        slot.setIsReserved(true);
      }
      return slot;
    });
    
  }
}
