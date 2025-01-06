import Slot from '../models/slot.model';
import ISlotRepo from '../interfaces/slot.interface';

export default class SlotService {
  private slotRepo: ISlotRepo;

  constructor(slotRepo: ISlotRepo) {
    this.slotRepo = slotRepo;
  }

  public listSlots(): Slot[] {
    return this.slotRepo.findAll();
  }

  public addSlot(time: string, cost: number): void {
    this.slotRepo.create({ slotTime: time, slotCost: cost });
  }

  public listDoctorAvailableSlots(): Slot[] {
    return this.slotRepo.findAvailableSlots();
  }
}
