import { randomUUID } from 'crypto';

export default class Slot {
  private ID: string;
  private time: string;
  private isReserved: boolean;
  private cost: number;

  constructor(time: string, cost: number, isReserved: boolean = false) {
    this.ID = randomUUID();
    this.time = time.toLocaleString();
    this.isReserved = isReserved;
    this.cost = cost;
  }

  public getID(): string {
    return this.ID;
  }

  public getSlotTime(): string {
    return this.time;
  }

  public setSlotTime(newTime: string) {
    this.time = newTime.toLocaleString();
  }

  public getIsReserved(): boolean {
    return this.isReserved;
  }

  public setIsReserved(status: boolean) {
    this.isReserved = status;
  }

  public getSlotCost(): number {
    return this.cost;
  }

  public setSlotCost(newCost: number) {
    if (newCost < 0) {
      throw new Error('Cost cannot be negative');
    }
    this.cost = newCost;
  }
}
