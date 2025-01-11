import AppointmentBookingDTO from "../../../../../../shared/dto/appointmentBooking.dto";


export default interface IAppointmentManagementRepository {

    listUpcomingAppointmentBookings(): AppointmentBookingDTO[];
    
};