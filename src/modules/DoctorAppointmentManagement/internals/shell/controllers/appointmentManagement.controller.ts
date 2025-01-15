import { Request, Response } from 'express';
import { dependencyManager } from '../../../../../shared/dependencies/dependencyManager';
import UpdateAppointmentBookingStatusDTO from '../../../../AppointmentBooking/internals/presentation/dtos/updateAppointmentBookingStatus.dto';
import AppointmentManagementService from '../../core/application/appointmentManagement.service';

const appointmentManagementService: AppointmentManagementService =
  dependencyManager.injectDependency('appointmentManagementService');

export default class AppointmentManagementController {
  public static listUpcomingAppointmentBookings(req: Request, res: Response) {
    try {
      const upcomingAppointmentBookings =
        appointmentManagementService.listUpcomingAppointmentBookings();
      return res.status(200).json(upcomingAppointmentBookings);
    } catch (error) {
      console.log('appointment management controller: ', error);
      return res.status(500).json({ message: 'Internal server error', error });
    }
  }

  public static updateAppointmentBookingStatus(req: Request, res: Response) {
    try {
      const updatedAppointmentBookingStatusDTO: UpdateAppointmentBookingStatusDTO =
        req.body;
      appointmentManagementService.updateAppointmentBookingStatus(
        updatedAppointmentBookingStatusDTO,
      );
      return res
        .status(200)
        .json({ message: 'Appointment booking status updated successfully' });
    } catch (error) {
      console.log('appointment management controller: ', error);
      return res.status(500).json({ message: 'Internal server error', error });
    }
  }
}
