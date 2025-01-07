import { Router } from "express";
import availableSlotsRouter from "./viewAvailableSlots.routes";

const appointmentBookingRouter = Router();

appointmentBookingRouter.use(availableSlotsRouter)

export default appointmentBookingRouter;
