import Slot from '../models/slot.model';
import ISlotRepo from '../repositories/ISlot.repository';
import ICreateSlotDTO from '../controllers/dtos/ICreateSlot.dto';
import { dependencyManager } from '../../../../shared/dependencies/dependencyManager';
import { InMemoryEventBus } from '../../../../shared/infrastructure/inMemoryEventBus';
import IEvent from '../../../../shared/domain/interfaces/IEvent.interface';
import { AppointmentBookingEvents } from '../../../../shared/enums/appointmentBookingEvents.enum';

export default class SlotService {
  private slotRepo: ISlotRepo = dependencyManager.injectDependency<ISlotRepo>('slotRepo');
  private eventBus: InMemoryEventBus = dependencyManager.injectDependency<InMemoryEventBus>('inMemoryEventBus');
  
  constructor () {
    // TODO: create an enum for the events
    this.eventBus.subscribe(AppointmentBookingEvents.APPOINTMENT_BOOKED, this.updateSlotIsReservedStatus.bind(this));
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
