import CreateSlotDTO from '../controllers/dtos/createSlot.dto';
import Slot from '../models/slot.model';

export default interface ISlotRepo {
  findAll(): Slot[];
  getSlotByID(slotID: string): Slot | null;
  create(createSlotDTO: CreateSlotDTO): void;
  findAvailableSlots(): Slot[];
  updateSlotIsReservedStatus(slotID: string): void; 
}
