import SlotDTO from '../../../../../../shared/dto/slot.dto';
import { dependencyManager } from '../../../../../../shared/dependencies/dependencyManager';
import IAppointmentBookingGateway from '../../../../gateway/IAppointmentBooking.gateway';
import IViewAvailableSlotsUseCase from './IViewAvailableSlots.usecase';


export default class ViewAvailableSlotsUseCase implements IViewAvailableSlotsUseCase {
    private appointmentBookingGateway: IAppointmentBookingGateway = dependencyManager.injectDependency<IAppointmentBookingGateway>('appointmentBookingGateway')

    execute(): SlotDTO[] {
        return this.appointmentBookingGateway.listDoctorAvailableSlots();
    };
};