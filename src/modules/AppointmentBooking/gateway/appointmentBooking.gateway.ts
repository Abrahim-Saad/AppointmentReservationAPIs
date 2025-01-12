import SlotDTO from '../../../shared/dto/slot.dto';
import ISlotFacade from '../../DoctorAvailability/facade/ISlot.facade';
import { dependencyManager } from '../../../shared/dependencies/dependencyManager';
import IAppointmentBookingGateway from './IAppointmentBooking.gateway';

export default class AppointmentBookingGateway
  implements IAppointmentBookingGateway
{
  private slotFacade: ISlotFacade =
    dependencyManager.injectDependency<ISlotFacade>('slotFacade');

  public listDoctorAvailableSlots(): SlotDTO[] {
    return this.slotFacade.listDoctorAvailableSlots();
  }

  public getSlotByID(slotID: string): SlotDTO | null {
    return this.slotFacade.getSlotByID(slotID);
  }
}
