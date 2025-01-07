import { Request, Response, Router } from 'express';
import ViewAvailableSlotsController from '../controllers/viewAvailableSlots.controller';

const availableSlotsRouter = Router();

availableSlotsRouter.get(
  '/available-slots',
  (req: Request, res: Response): void => {
    ViewAvailableSlotsController.handle(req, res);
  },
);

export default availableSlotsRouter;
