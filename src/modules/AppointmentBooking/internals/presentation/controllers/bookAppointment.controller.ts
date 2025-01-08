import { Request, Response } from 'express';
import { container } from '../../shared/container';
import IAppointmentBookingRepository from '../../domain/interfaces/IAppointmentBooking.repository';
import AppointmentBookingRepository from '../../infrastructure/repositories/appointmentBooking.repository';
container.register<IAppointmentBookingRepository>('appointmentBookingRepository', new AppointmentBookingRepository());

import IBookAppointmentUseCase from '../../application/usecases/bookAppointment/IBookAppointment.usecase';
import BookAppointmentUseCase from '../../application/usecases/bookAppointment/bookAppointment.usecase';
container.register<IBookAppointmentUseCase>('bookAppointmentUseCase', new BookAppointmentUseCase());

export default class BookAppointmentController {
    static bookAppointment: IBookAppointmentUseCase = container.resolve<IBookAppointmentUseCase>('bookAppointmentUseCase');

    public static handle(req: Request, res: Response) {
        try {
            const createAppointmentBookingDTO = req.body;
            const availableSlots = this.bookAppointment.execute(createAppointmentBookingDTO);
            return res.status(200).json(availableSlots);
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error', error });
        }
    }
}
