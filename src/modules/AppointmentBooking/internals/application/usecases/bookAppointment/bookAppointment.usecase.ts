import IBookAppointmentUseCase from "./IBookAppointment.usecase";
import IAppointmentBookingRepository from "../../../domain/interfaces/IAppointmentBooking.repository";
import ICreateAppointmentBookingDTO from "../../../presentation/dtos/ICreateAppointmentBooking.dto";
import { container as AppointmentBookingContainer } from '../../../../internals/shared/container';
import { container as EventBusContainer} from '../../../../../../shared/container/container';
import AppointmentBookingDTO from "../../../../../../shared/dto/appointmentBooking.dto";
import { InMemoryEventBus } from "../../../../../../shared/infrastructure/inMemoryEventBus";
import AppointmentBookedEvent from "../../../../../../shared/domain/events/appointmentBooked.event";
import IEvent from "../../../../../../shared/domain/interfaces/IEvent.interface";


export default class BookAppointmentUseCase implements IBookAppointmentUseCase {
    private appointmentBookingRepo: IAppointmentBookingRepository = AppointmentBookingContainer.resolve<IAppointmentBookingRepository>('appointmentBookingRepository')
    private eventBus: InMemoryEventBus = EventBusContainer.resolve<InMemoryEventBus>('InMemoryEventBus')

    async execute(createAppointmentBookingDTO: ICreateAppointmentBookingDTO): Promise<void> {
        console.log('BookAppointmentUseCase: execute', createAppointmentBookingDTO)
        const appointmentBooking: AppointmentBookingDTO = this.appointmentBookingRepo.createAppointmentBooking(createAppointmentBookingDTO)
        const appointmentBookedEvent: IEvent = new AppointmentBookedEvent(appointmentBooking);
        console.log('BookAppointmentUseCase: execute: appointmentBookedEvent', appointmentBookedEvent)
        await this.eventBus.publish(appointmentBookedEvent);
        console.log('BookAppointmentUseCase: execute: event published')
    }
}