import ICreateSlotDTO from '../controllers/dtos/ICreateSlot.dto';
import Slot from '../models/slot.model';

export default interface ISlotRepo {
  findAll(): Slot[];
  getSlotByID(slotID: string): Slot | null;
  create(createSlotDTO: ICreateSlotDTO): void;
  findAvailableSlots(): Slot[];
  updateSlotIsReservedStatus(slotID: string): void; 
}
