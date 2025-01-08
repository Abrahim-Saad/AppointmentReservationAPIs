import { Router } from "express";
import availableSlotsRouter from "./viewAvailableSlots.routes";
import bookAppointmentRouter from "./bookAppointment.route";

const appointmentBookingRouter = Router();

appointmentBookingRouter.use(availableSlotsRouter)
appointmentBookingRouter.use(bookAppointmentRouter)

export default appointmentBookingRouter;
