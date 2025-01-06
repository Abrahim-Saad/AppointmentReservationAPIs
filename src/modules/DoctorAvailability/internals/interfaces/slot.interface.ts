import Slot from '../models/slot.model';

export default interface ISlotRepo {
  findAll(): Slot[];
  create(entity: Partial<Slot>): void;
  findAvailableSlots(): Slot[];
}
