import { Router, Request, Response  } from 'express';
import AppointmentBookingGateway from '../../../gateway/appointmentBooking.gateway';
import SlotFacade from '../../../../DoctorAvailability/facade/slot.facade';
import ViewAvailableSlotsController from '../controllers/viewAvailableSlots.controller';
import ViewAvailableSlotsUseCase from '../../application/usecases/viewAvailableSlots/viewAvailableSlots.usecase';

const availableSlotsRouter = Router();
const slotFacade = new SlotFacade();
const appointmentBookingGateway = new AppointmentBookingGateway(slotFacade);
const viewAvailableSlotsUseCase = new ViewAvailableSlotsUseCase(appointmentBookingGateway);
const viewAvailableSlotsController = new ViewAvailableSlotsController(viewAvailableSlotsUseCase);

availableSlotsRouter.get('/available-slots', (req, res) => viewAvailableSlotsController.handle(req, res));

export default availableSlotsRouter ;