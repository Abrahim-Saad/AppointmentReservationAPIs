import { Request, Response, Router } from 'express';
import AppointmentManagementController from '../appointmentManagement.controller';

const AppointmentManagementRouter = Router();

AppointmentManagementRouter.get(
  '/upcoming',
  (req: Request, res: Response): void => {
    AppointmentManagementController.listUpcomingAppointmentBookings(req, res);
  },
);

export default AppointmentManagementRouter;
