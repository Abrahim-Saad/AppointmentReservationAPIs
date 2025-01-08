
import AppointmentBookingDTO from "../../../../../shared/dto/appointmentBooking.dto";
import AppointmentBooking from "../../domain/entities/appointmentBooking.entity";
import IAppointmentBookingRepository from "../../domain/interfaces/IAppointmentBooking.repository";
import ICreateAppointmentBookingDTO from "../../presentation/dtos/ICreateAppointmentBooking.dto";
import IUpdateAppointmentBookingStatusDTO from "../../presentation/dtos/IUpdateAppointmentBookingStatus.dto";

export default class AppointmentBookingRepository implements IAppointmentBookingRepository {

    private appointmentBookings: AppointmentBooking[] = [];

    createAppointmentBooking(appointment: ICreateAppointmentBookingDTO): AppointmentBookingDTO {
        
        const newAppointment = new AppointmentBooking(
            appointment.slotID,
            appointment.patientId,
            appointment.patientName
        );
        this.appointmentBookings.push(newAppointment);
        return {
            slotID: newAppointment.getSlotID(),
            patientId: newAppointment.getPatientId(),
            patientName: newAppointment.getPatientName()
        } as AppointmentBookingDTO;
    }


    getAppointmentBookingById(id: string): AppointmentBookingDTO {
        const appointment = this.appointmentBookings.find(appointment => appointment.getID() === id);
        if (appointment) {
            return {
                slotID: appointment.getID(),
                patientId: appointment.getPatientId(),
                patientName: appointment.getPatientName()
            } as AppointmentBookingDTO;
        }
        throw new Error(`AppointmentBooking with ID ${id} not found`);
    }


    listAppointmentBookings(): AppointmentBookingDTO[] {
        return this.appointmentBookings.map(appointment => ({
            slotID: appointment.getID(),
            patientId: appointment.getPatientId(),
            patientName: appointment.getPatientName()
        } as AppointmentBookingDTO));
    }

    updateAppointmentBookingStatus(updateDTO: IUpdateAppointmentBookingStatusDTO): void {
        const appointment = this.appointmentBookings.find(appointment => appointment.getID() === updateDTO.ID);
        if (appointment) {
            appointment.setAppointmentStatus(updateDTO.appointmentStatus);
        }
    }

}