import IAppointmentManagementRepository from "../../../../core/domain/repositories/IAppointmentManagement.repository";
import AppointmentBookingDTO from "../../../../../../../shared/dto/appointmentBooking.dto";
import { container } from "../../../../../../../shared/container/container";
import IAppointmentManagementGateway from "../../../../../gateway/IAppointmentManagement.gateway";


export default class AppointmentManagementRepository implements IAppointmentManagementRepository{

  private appointmentManagementGateway: IAppointmentManagementGateway = container.resolve<IAppointmentManagementGateway>('appointmentManagementGateway');

  listUpcomingAppointmentBookings(): AppointmentBookingDTO[] {
    return this.appointmentManagementGateway.listUpcomingAppointmentBookings();
  }
};