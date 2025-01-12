import { Request, Response } from 'express';
import IViewAvailableSlotsUseCase from '../../application/usecases/viewAvailableSlots/IViewAvailableSlots.usecase';
import { container } from '../../../../../shared/container/container';


export default class ViewAvailableSlotsController {
  static viewAvailableSlotsUseCase: IViewAvailableSlotsUseCase =
    container.resolve<IViewAvailableSlotsUseCase>('viewAvailableSlotsUseCase');

  public static handle(req: Request, res: Response) {
    try {
      const availableSlots = this.viewAvailableSlotsUseCase.execute();
      return res.status(200).json(availableSlots);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error', error });
    }
  }
}
