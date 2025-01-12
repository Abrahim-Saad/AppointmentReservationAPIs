import IAppointmentManagementRepository from "../../../../core/domain/repositories/IAppointmentManagement.repository";
import AppointmentBookingDTO from "../../../../../../../shared/dto/appointmentBooking.dto";
import { dependencyManager } from "../../../../../../../shared/dependencies/dependencyManager";
import IAppointmentManagementGateway from "../../../../../gateway/IAppointmentManagement.gateway";


export default class AppointmentManagementRepository implements IAppointmentManagementRepository{

  private appointmentManagementGateway: IAppointmentManagementGateway = dependencyManager.injectDependency<IAppointmentManagementGateway>('appointmentManagementGateway');

  listUpcomingAppointmentBookings(): AppointmentBookingDTO[] {
    return this.appointmentManagementGateway.listUpcomingAppointmentBookings();
  }
};