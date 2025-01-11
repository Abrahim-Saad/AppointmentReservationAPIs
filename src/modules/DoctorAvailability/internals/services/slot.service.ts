import Slot from '../models/slot.model';
import ISlotRepo from '../repositories/ISlot.repository';
import ICreateSlotDTO from '../controllers/dtos/ICreateSlot.dto';
import { container as DoctorAvailabilityContainer } from '../shared/container';
import { container as EventBusContainer } from '../../../../shared/container/container'
import { InMemoryEventBus } from '../../../../shared/infrastructure/inMemoryEventBus';
import IEvent from '../../../../shared/domain/interfaces/IEvent.interface';

export default class SlotService {
  private slotRepo: ISlotRepo = DoctorAvailabilityContainer.resolve<ISlotRepo>('slotRepo');
  private eventBus: InMemoryEventBus = EventBusContainer.resolve<InMemoryEventBus>('InMemoryEventBus');
  
  constructor () {
    // TODO: create an enum for the events
    this.eventBus.subscribe('AppointmentBooked', this.updateSlotIsReservedStatus.bind(this));
  }

  public listSlots(): Slot[] {
    return this.slotRepo.findAll();
  }

  public getSlotByID(slotID: string): Slot | null {
    return this.slotRepo.getSlotByID(slotID);
  }

  public addSlot(createSlotDto: ICreateSlotDTO): void {
    this.slotRepo.create(createSlotDto);
  }

  public listDoctorAvailableSlots(): Slot[] {
    return this.slotRepo.findAvailableSlots();
  }
  
  
  public updateSlotIsReservedStatus(event: IEvent): void {
    const slotID = event.eventData.slotID;
    
    this.slotRepo.updateSlotIsReservedStatus(slotID);
  }
}
