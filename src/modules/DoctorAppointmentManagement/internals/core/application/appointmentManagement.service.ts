import IAppointmentManagementRepository from "../domain/repositories/IAppointmentManagment.repository";
import AppointmentBookingDTO from "../../../../../shared/dto/appointmentBooking.dto";


export default class AppointmentManagmentService {

    private appointmentManagementRepository: IAppointmentManagementRepository;

    constructor(appointmentManagementRepository: IAppointmentManagementRepository){
        this.appointmentManagementRepository = appointmentManagementRepository;
    }

    listUpcomingAppointmentBookings(): AppointmentBookingDTO[]{
        return this.appointmentManagementRepository.listUpcomingAppointmentBookings();
    };

};