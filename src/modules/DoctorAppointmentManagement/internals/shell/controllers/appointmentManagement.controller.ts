import { Request, Response } from 'express';
import { container } from '../../shared/container';
import IAppointmentManagementRepository from '../../core/domain/repositories/IAppointmentManagment.repository';
import AppointmentManagmentService from '../../core/application/appointmentManagement.service';
import AppointmentManagmentRepository from '../infrastructure/datastore/repositories/appointmentManagment.repository';


container.register<IAppointmentManagementRepository>('appointmentManagmentRepository', new AppointmentManagmentRepository());
container.register<AppointmentManagmentService>('appointmentManagementService', new AppointmentManagmentService(container.resolve('appointmentManagmentRepository')));
const appointmentManagementService: AppointmentManagmentService = container.resolve('appointmentManagementService');


export default class AppointmentManagmentController {

  public static listUpcomingAppointmentBookings(req: Request, res: Response) {
    try {
      const upcomingAppointmentBookings = appointmentManagementService.listUpcomingAppointmentBookings();
      return res.status(200).json(upcomingAppointmentBookings);
    } catch (error) {
      console.log('appointment managment controller: ', error);
      
      return res.status(500).json({ message: 'Internal server error', error });
    }
  }
}
