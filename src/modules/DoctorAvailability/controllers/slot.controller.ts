import express, { Request, Response } from 'express';

import SlotRepo from '../repositories/slot.repository';
import SlotService from '../services/slot.service';
import CreateSlotDTO from './dtos/createSlot.dto';

const slotRepo = new SlotRepo();
const slotService = new SlotService(slotRepo);

const slotRouter = express.Router();

slotRouter.get('/slots', (req: Request, res: Response) => {
  try {
    const slots = slotService.listSlots();
    res.status(200).json(slots);
  } catch (error) {
    res.status(500).json({ message: 'Error listing slots', error });
  }
});


slotRouter.post('/slots', (req: Request, res: Response) => {
  try {
    const { time, cost } = req.body;
    const createSlotDTO = new CreateSlotDTO(time, cost)
    slotService.addSlot(createSlotDTO.time, createSlotDTO.cost);
    res.status(201).json({ message: 'Slot created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating slot', error });
  }
});

export default slotRouter;
