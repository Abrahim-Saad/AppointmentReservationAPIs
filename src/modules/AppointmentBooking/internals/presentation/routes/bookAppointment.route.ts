import { Request, Response, Router } from 'express';
import BookAppointmentController from '../controllers/bookAppointment.controller';

const bookAppointmentRouter = Router();

bookAppointmentRouter.post(
  '/book',
  (req: Request, res: Response): void => {
    BookAppointmentController.handle(req, res);
  },
);

export default bookAppointmentRouter;
