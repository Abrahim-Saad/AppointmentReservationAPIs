import IAppointmentManagementRepository from "../../../../core/domain/repositories/IAppointmentManagment.repository";
import AppointmentBookingDTO from "../../../../../../../shared/dto/appointmentBooking.dto";
import { container } from "../../../../../../../shared/container/container";
import IAppointmentManagmentGateway from "../../../../../gateway/IAppointmentManagment.gateway";


export default class AppointmentManagmentRepository implements IAppointmentManagementRepository{

  private appointmentManagmentGateway: IAppointmentManagmentGateway = container.resolve<IAppointmentManagmentGateway>('appointmentManagmentGateway');

  listUpcomingAppointmentBookings(): AppointmentBookingDTO[] {
    return this.appointmentManagmentGateway.listUpcomingAppointmentBookings();
  }
};