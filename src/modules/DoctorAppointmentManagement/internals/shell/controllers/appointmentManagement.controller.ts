import { Request, Response } from 'express';
import { container } from '../../../../../shared/container/container';
import AppointmentManagementService from '../../core/application/appointmentManagement.service';


const appointmentManagementService: AppointmentManagementService = container.resolve('appointmentManagementService');


export default class AppointmentManagementController {

  public static listUpcomingAppointmentBookings(req: Request, res: Response) {
    try {
      const upcomingAppointmentBookings = appointmentManagementService.listUpcomingAppointmentBookings();
      return res.status(200).json(upcomingAppointmentBookings);
    } catch (error) {
      console.log('appointment management controller: ', error);
      
      return res.status(500).json({ message: 'Internal server error', error });
    }
  }
}
