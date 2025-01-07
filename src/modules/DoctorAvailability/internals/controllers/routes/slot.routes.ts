import express, { Request, Response } from 'express';
import SlotController from '../slot.controller';

const slotRouter = express.Router();

slotRouter.get('/slots', (req: Request, res: Response): void => {
  SlotController.getSlots(req, res);
});

slotRouter.post('/slots', (req: Request, res: Response): void => {
  SlotController.addSlot(req, res);
});

export default slotRouter;
