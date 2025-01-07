import { Request, Response } from 'express';
import IViewAvailableSlotsUseCase from '../../application/usecases/viewAvailableSlots/IViewAvailableSlots.usecase';
import { container } from '../../shared/container';
import ISlotFacade from '../../../../DoctorAvailability/facade/ISlot.facade';
import SlotFacade from '../../../../DoctorAvailability/facade/slot.facade';
import IAppointmentBookingGateway from '../../../gateway/IAppointmentBooking.gateway';
import AppointmentBookingGateway from '../../../gateway/appointmentBooking.gateway';
import ViewAvailableSlotsUseCase from '../../application/usecases/viewAvailableSlots/viewAvailableSlots.usecase';

container.register<ISlotFacade>('slotFacade', new SlotFacade());
container.register<IAppointmentBookingGateway>('appointmentBookingGateway', new AppointmentBookingGateway());
container.register<IViewAvailableSlotsUseCase>('viewAvailableSlotsUseCase', new ViewAvailableSlotsUseCase());

export default class ViewAvailableSlotsController {
  static viewAvailableSlotsUseCase: IViewAvailableSlotsUseCase = container.resolve<IViewAvailableSlotsUseCase>('viewAvailableSlotsUseCase');

  public static handle(req: Request, res: Response) {
    try {
      const availableSlots = this.viewAvailableSlotsUseCase.execute();
      return res.status(200).json(availableSlots);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error', error });
    }
  }
}
