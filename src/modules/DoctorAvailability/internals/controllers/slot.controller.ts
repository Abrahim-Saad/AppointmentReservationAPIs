import { Request, Response } from 'express';

import SlotService from '../services/slot.service';
import { container } from '../shared/container';
import ICreateSlotDTO from './dtos/ICreateSlot.dto';
import ISlotRepo from '../repositories/ISlot.repository';
import SlotRepo from '../repositories/slot.repository';

container.register<ISlotRepo>('slotRepo', new SlotRepo());
container.register<SlotService>('slotService', new SlotService());

const slotService: SlotService = container.resolve('slotService');

export default class SlotController {
  public static addSlot(req: Request, res: Response) {
    try {
      const { time, cost } = req.body;
      const createSlotDTO: ICreateSlotDTO = { time, cost };
      slotService.addSlot(createSlotDTO);
      res.status(201).json({ message: 'Slot created successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error creating slot', error });
    }
  }

  public static getSlots(req: Request, res: Response) {
    try {
      const slots = slotService.listSlots();
      res.status(200).json(slots);
    } catch (error) {
      res.status(500).json({ message: 'Error listing slots', error });
    }
  }
}
