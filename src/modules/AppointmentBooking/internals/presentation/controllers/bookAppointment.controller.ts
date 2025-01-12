import { Request, Response } from 'express';
import { dependencyManager } from '../../../../../shared/dependencies/dependencyManager';
import IBookAppointmentUseCase from '../../application/usecases/bookAppointment/IBookAppointment.usecase';

export default class BookAppointmentController {
  static bookAppointment: IBookAppointmentUseCase =
    dependencyManager.injectDependency<IBookAppointmentUseCase>('bookAppointmentUseCase');

  public static async handle(req: Request, res: Response) {
    try {
      const createAppointmentBookingDTO = req.body;
      const availableSlots = await this.bookAppointment.execute(
        createAppointmentBookingDTO,
      );
      return res.status(200).json(availableSlots);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error', error });
    }
  }
}
