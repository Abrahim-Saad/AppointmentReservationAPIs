import { dependencyManager } from './dependencyManager';


import { InMemoryEventBus } from '../infrastructure/inMemoryEventBus';
import INotificationService from '../../modules/AppointmentConfirmation/INotification.service';
import NotificationService from '../../modules/AppointmentConfirmation/notification.service';

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

export default function initializeDependencies(): void {
    console.log('Registering dependencies in the container...');
    
    // Registrations order are based on dependencies order
    dependencyManager.registerDependency<InMemoryEventBus>('inMemoryEventBus', new InMemoryEventBus());
    dependencyManager.registerDependency<INotificationService>('notificationService', new NotificationService());
    dependencyManager.registerDependency<ISlotRepo>('slotRepo', new SlotRepo());
    dependencyManager.registerDependency<SlotService>('slotService', new SlotService());
    dependencyManager.registerDependency<IAppointmentBookingRepository>('appointmentBookingRepository', new AppointmentBookingRepository());
    dependencyManager.registerDependency('listUpcomingAppointmentBookingsUseCase', new ListUpcomingAppointmentBookingsUseCase());
    dependencyManager.registerDependency<IAppointmentBookingFacade>('appointmentBookingFacade', new AppointmentBookingFacade());
    dependencyManager.registerDependency<IAppointmentManagementGateway>('appointmentManagementGateway', new AppointmentManagementGateway());
    dependencyManager.registerDependency<ISlotFacade>('slotFacade', new SlotFacade());
    dependencyManager.registerDependency<IAppointmentBookingGateway>('appointmentBookingGateway', new AppointmentBookingGateway());
    dependencyManager.registerDependency<IViewAvailableSlotsUseCase>('viewAvailableSlotsUseCase', new ViewAvailableSlotsUseCase());
    dependencyManager.registerDependency<IBookAppointmentUseCase>('bookAppointmentUseCase', new BookAppointmentUseCase());
    dependencyManager.registerDependency<IAppointmentManagementRepository>('appointmentManagementRepository', new AppointmentManagementRepository());
    dependencyManager.registerDependency<AppointmentManagementService>('appointmentManagementService', new AppointmentManagementService(dependencyManager.injectDependency('appointmentManagementRepository')));

    console.log('Registrations completed');
};