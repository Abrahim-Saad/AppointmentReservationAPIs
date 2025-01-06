import { randomUUID } from 'crypto';

export default class Slot {
  private ID: string;
  private time: string;
  private isReserved: boolean;
  private cost: number;

  constructor(time: string, cost: number) {
    this.ID = randomUUID();
    this.time = time.toLocaleString();
    this.isReserved = false;
    this.cost = cost;
  }

  public get id(): string {
    return this.ID;
  }

  public get slotTime(): string {
    return this.time;
  }

  public set slotTime(newTime: string) {
    this.time = newTime.toLocaleString();
  }

  public get reserved(): boolean {
    return this.isReserved;
  }

  public set reserved(status: boolean) {
    this.isReserved = status;
  }

  public get slotCost(): number {
    return this.cost;
  }

  public set slotCost(newCost: number) {
    if (newCost < 0) {
      throw new Error('Cost cannot be negative');
    }
    this.cost = newCost;
  }
}
