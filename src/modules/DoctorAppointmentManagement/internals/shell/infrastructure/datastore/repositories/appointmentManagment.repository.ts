import IAppointmentManagementRepository from "../../../../core/domain/repositories/IAppointmentManagment.repository";
import AppointmentBookingDTO from "../../../../../../../shared/dto/appointmentBooking.dto";
import { container } from "../../../../shared/container";
import AppointmentManagmentGateway from "../../../../../gateway/appointmentManagment.gateway";
import IAppointmentManagmentGateway from "../../../../../gateway/IAppointmentManagment.gateway";

container.register<IAppointmentManagmentGateway>('appointmentManagmentGateway', new AppointmentManagmentGateway());

export default class AppointmentManagmentRepository implements IAppointmentManagementRepository{

  private appointmentManagmentGateway: AppointmentManagmentGateway = container.resolve<AppointmentManagmentGateway>('appointmentManagmentGateway');

  listUpcomingAppointmentBookings(): AppointmentBookingDTO[] {
    return this.appointmentManagmentGateway.listUpcomingAppointmentBookings();
  }
};