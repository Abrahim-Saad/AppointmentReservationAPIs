import { Request, Response } from 'express';

import SlotService from '../services/slot.service';
import { dependencyManager } from '../../../../shared/dependencies/dependencyManager';
import CreateSlotDTO from './dtos/createSlot.dto';


const slotService: SlotService = dependencyManager.injectDependency('slotService');

export default class SlotController {
  public static addSlot(req: Request, res: Response) {
    try {
      const { time, cost } = req.body;
      const createSlotDTO: CreateSlotDTO = { time, cost };
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
