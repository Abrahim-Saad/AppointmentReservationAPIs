import ISlotRepo from '../interfaces/slot.interface';
import Slot from '../models/slot.model';

export default class SlotRepo implements ISlotRepo {
  private slots: Slot[] = [];

  public findAll(): Slot[] {
    return this.slots;
  }

  public findAvailableSlots(): Slot[] {
    return this.slots.filter((slot) => slot.reserved);
  }

  public create({ slotTime, slotCost }: Partial<Slot>): void {
    const time = slotTime as string;
    const cost = slotCost as number;
    const slot = new Slot(time, cost);
    this.slots.push(slot);
  }
}
