import ICreateSlotDTO from '../controllers/dtos/ICreateSlot.dto';
import Slot from '../models/slot.model';

export default interface ISlotRepo {
  findAll(): Slot[];
  create(createSlotDto: ICreateSlotDTO): void;
  findAvailableSlots(): Slot[];
  updateSlotIsReservedStatus(slotId: string): void; 
}
