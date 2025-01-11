import SlotDTO from '../../../shared/dto/slot.dto';
import ISlotFacade from '../../DoctorAvailability/facade/ISlot.facade';
import { container } from '../internals/shared/container';
import IAppointmentBookingGateway from './IAppointmentBooking.gateway';

export default class AppointmentBookingGateway
  implements IAppointmentBookingGateway
{
  private slotFacade: ISlotFacade =
    container.resolve<ISlotFacade>('slotFacade');

  public listDoctorAvailableSlots(): SlotDTO[] {
    return this.slotFacade.listDoctorAvailableSlots();
  }

  public getSlotByID(slotID: string): SlotDTO | null {
    return this.slotFacade.getSlotByID(slotID);
  }
}
