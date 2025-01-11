import { Request, Response, Router } from 'express';
import AppointmentManagmentController from '../appointmentManagement.controller';

const AppointmentManagmentRouter = Router();

AppointmentManagmentRouter.get(
  '/upcoming',
  (req: Request, res: Response): void => {
    AppointmentManagmentController.listUpcomingAppointmentBookings(req, res);
  },
);

export default AppointmentManagmentRouter;
