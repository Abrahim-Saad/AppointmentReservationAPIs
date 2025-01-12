import { container } from './container';


import { InMemoryEventBus } from '../infrastructure/inMemoryEventBus';

// Doctor Availability Module Dependencies

import ISlotRepo from '../../modules/DoctorAvailability/internals/repositories/ISlot.repository';
import SlotRepo from '../../modules/DoctorAvailability/internals/repositories/slot.repository';
import SlotService from '../../modules/DoctorAvailability/internals/services/slot.service';
import ISlotFacade from '../../modules/DoctorAvailability/facade/ISlot.facade';
import SlotFacade from '../../modules/DoctorAvailability/facade/slot.facade';


// Doctor Appointment Management Module Dependencies

import IAppointmentManagementGateway from '../../modules/DoctorAppointmentManagement/gateway/IAppointmentManagement.gateway';
import AppointmentManagementGateway from '../../modules/DoctorAppointmentManagement/gateway/appointmentManagement.gateway';
import IAppointmentManagementRepository from '../../modules/DoctorAppointmentManagement/internals/core/domain/repositories/IAppointmentManagement.repository';
import AppointmentManagementService from '../../modules/DoctorAppointmentManagement/internals/core/application/appointmentManagement.service';
import AppointmentManagementRepository from '../../modules/DoctorAppointmentManagement/internals/shell/infrastructure/datastore/repositories/appointmentManagement.repository';


// Appointment Booking Module Dependencies

import IAppointmentBookingFacade from '../../modules/AppointmentBooking/facade/IAppointmentBooking.facade';
import AppointmentBookingFacade from '../../modules/AppointmentBooking/facade/appointmentBooking.facade';
import IAppointmentBookingRepository from '../../modules/AppointmentBooking/internals/domain/interfaces/IAppointmentBooking.repository';
import AppointmentBookingRepository from '../../modules/AppointmentBooking/internals/infrastructure/repositories/appointmentBooking.repository';
import ListUpcomingAppointmentBookingsUseCase from '../../modules/AppointmentBooking/internals/application/usecases/listUpcomingAppointmentBookings/listUpcomingAppointmentBookings.usecase';
import AppointmentBookingGateway from '../../modules/AppointmentBooking/gateway/appointmentBooking.gateway';
import IAppointmentBookingGateway from '../../modules/AppointmentBooking/gateway/IAppointmentBooking.gateway';
import IViewAvailableSlotsUseCase from '../../modules/AppointmentBooking/internals/application/usecases/viewAvailableSlots/IViewAvailableSlots.usecase';
import ViewAvailableSlotsUseCase from '../../modules/AppointmentBooking/internals/application/usecases/viewAvailableSlots/viewAvailableSlots.usecase';
import BookAppointmentUseCase from '../../modules/AppointmentBooking/internals/application/usecases/bookAppointment/bookAppointment.usecase';
import IBookAppointmentUseCase from '../../modules/AppointmentBooking/internals/application/usecases/bookAppointment/IBookAppointment.usecase';


// Registering dependencies in the container

export default function containerRegistry(): void {
    console.log('Registering dependencies in the container...');
    
    // Registrations order are based on dependencies order
    container.register<InMemoryEventBus>('inMemoryEventBus', new InMemoryEventBus());
    container.register<ISlotRepo>('slotRepo', new SlotRepo());
    container.register<SlotService>('slotService', new SlotService());
    container.register<IAppointmentBookingRepository>('appointmentBookingRepository', new AppointmentBookingRepository());
    container.register('listUpcomingAppointmentBookingsUseCase', new ListUpcomingAppointmentBookingsUseCase());
    container.register<IAppointmentBookingFacade>('appointmentBookingFacade', new AppointmentBookingFacade());
    container.register<IAppointmentManagementGateway>('appointmentManagementGateway', new AppointmentManagementGateway());
    container.register<ISlotFacade>('slotFacade', new SlotFacade());
    container.register<IAppointmentBookingGateway>('appointmentBookingGateway', new AppointmentBookingGateway());
    container.register<IViewAvailableSlotsUseCase>('viewAvailableSlotsUseCase', new ViewAvailableSlotsUseCase());
    container.register<IBookAppointmentUseCase>('bookAppointmentUseCase', new BookAppointmentUseCase());
    container.register<IAppointmentManagementRepository>('appointmentManagementRepository', new AppointmentManagementRepository());
    container.register<AppointmentManagementService>('appointmentManagementService', new AppointmentManagementService(container.resolve('appointmentManagementRepository')));

    console.log('Registrations completed');
};