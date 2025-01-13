import { dependencyManager } from '../../../../shared/dependencies/dependencyManager';
import IEvent from '../../../../shared/domain/interfaces/IEvent.interface';
import { AppointmentBookingEvents } from '../../../../shared/enums/appointmentBookingEvents.enum';
import { InMemoryEventBus } from '../../../../shared/infrastructure/inMemoryEventBus';
import ICreateSlotDTO from '../controllers/dtos/ICreateSlot.dto';
import Slot from '../models/slot.model';
import ISlotRepo from '../repositories/ISlot.repository';

export default class SlotService {
  private slotRepo: ISlotRepo =
    dependencyManager.injectDependency<ISlotRepo>('slotRepo');
  private eventBus: InMemoryEventBus =
    dependencyManager.injectDependency<InMemoryEventBus>('inMemoryEventBus');

  constructor() {
    this.eventBus.subscribe(
      AppointmentBookingEvents.APPOINTMENT_BOOKED,
      this.updateSlotIsReservedStatus.bind(this),
    );
  }

  public listSlots(): Slot[] {
    return this.slotRepo.findAll();
  }

  public getSlotByID(slotID: string): Slot | null {
    return this.slotRepo.getSlotByID(slotID);
  }

  public addSlot(createSlotDTO: ICreateSlotDTO): void {
    this.slotRepo.create(createSlotDTO);
  }

  public listDoctorAvailableSlots(): Slot[] {
    return this.slotRepo.findAvailableSlots();
  }

  public updateSlotIsReservedStatus(event: IEvent): void {
    const slotID = event.eventData.slotID;

    this.slotRepo.updateSlotIsReservedStatus(slotID);
  }
}
