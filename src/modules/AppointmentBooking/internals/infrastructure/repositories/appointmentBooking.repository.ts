import AppointmentBookingDTO from "../../../../../shared/dto/appointmentBooking.dto";
import AppointmentBooking from "../../domain/entities/appointmentBooking.entity";
import { AppointmentStatus } from "../../domain/enums/appointmentStatus.enum";
import IAppointmentBookingRepository from "../../domain/interfaces/IAppointmentBooking.repository";
import ICreateAppointmentBookingDTO from "../../presentation/dtos/ICreateAppointmentBooking.dto";
import IUpdateAppointmentBookingStatusDTO from "../../presentation/dtos/IUpdateAppointmentBookingStatus.dto";

export default class AppointmentBookingRepository implements IAppointmentBookingRepository {
    private appointmentBookings: AppointmentBooking[] = [];

    createAppointmentBooking(appointment: ICreateAppointmentBookingDTO): AppointmentBookingDTO {
        const newAppointment = new AppointmentBooking(
            appointment.slotID,
            appointment.slotTime,
            appointment.patientID,
            appointment.patientName
        );
        this.appointmentBookings.push(newAppointment);
        return {
            slotID: newAppointment.getSlotID(),
            slotTime: newAppointment.getSlotTime(),
            patientID: newAppointment.getPatientID(),
            patientName: newAppointment.getPatientName(),
        } as AppointmentBookingDTO;
    }

    getAppointmentBookingByID(ID: string): AppointmentBookingDTO {
        const appointment = this.appointmentBookings.find(appointment => appointment.getID() === ID);
        if (appointment) {
            return {
                slotID: appointment.getID(),
                patientID: appointment.getPatientID(),
                patientName: appointment.getPatientName(),
                appointmentStatus: appointment.getAppointmentStatus()
            } as AppointmentBookingDTO;
        }
        throw new Error(`AppointmentBooking with ID ${ID} not found`);
    }

    listAppointmentBookings(): AppointmentBookingDTO[] {
        return this.appointmentBookings.map(appointment => ({
            slotID: appointment.getID(),
            patientID: appointment.getPatientID(),
            patientName: appointment.getPatientName()
        } as AppointmentBookingDTO));
    }

    updateAppointmentBookingStatus(updateDTO: IUpdateAppointmentBookingStatusDTO): void {
        const appointment = this.appointmentBookings.find(appointment => appointment.getID() === updateDTO.ID);
        if (appointment) {
            appointment.setAppointmentStatus(updateDTO.appointmentStatus);
        }
    }

    listUpcomingAppointmentBookings(): AppointmentBookingDTO[] {
        return this.appointmentBookings
            .filter(appointment => {
                const appointmentDate = appointment.getSlotTime().toLocaleString();
                const now = new Date().toLocaleString();
                if (appointmentDate > now && appointment.getAppointmentStatus() !== AppointmentStatus.CANCELLED) {
                    return appointment
                }
            })
            .map(appointment => ({
                slotID: appointment.getID(),
                slotTime: appointment.getSlotTime(),
                patientID: appointment.getPatientID(),
                patientName: appointment.getPatientName(),
                appointmentStatus: appointment.getAppointmentStatus()
            } as AppointmentBookingDTO));
    }
}