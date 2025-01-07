import Slot from '../models/slot.model';
import ISlotRepo from '../interfaces/slot.interface';
import ICreateSlotDTO from '../controllers/dtos/ICreateSlot.dto';
import { container } from '../shared/container';

export default class SlotService {
  private slotRepo: ISlotRepo = container.resolve<ISlotRepo>('slotRepo');

  public listSlots(): Slot[] {
    return this.slotRepo.findAll();
  }

  public addSlot(createSlotDto: ICreateSlotDTO): void {
    this.slotRepo.create(createSlotDto);
  }

  public listDoctorAvailableSlots(): Slot[] {
    return this.slotRepo.findAvailableSlots();
  }
}
