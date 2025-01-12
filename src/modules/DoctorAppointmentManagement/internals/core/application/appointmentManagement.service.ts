import IAppointmentManagementRepository from "../domain/repositories/IAppointmentManagement.repository";
import AppointmentBookingDTO from "../../../../../shared/dto/appointmentBooking.dto";


export default class AppointmentManagementService {

    private appointmentManagementRepository: IAppointmentManagementRepository;

    constructor(appointmentManagementRepository: IAppointmentManagementRepository){
        this.appointmentManagementRepository = appointmentManagementRepository;
    }

    listUpcomingAppointmentBookings(): AppointmentBookingDTO[]{
        return this.appointmentManagementRepository.listUpcomingAppointmentBookings();
    };

};