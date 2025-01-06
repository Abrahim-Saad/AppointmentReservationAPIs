export default class CreateSlotDTO {
    public time: string;
    public cost: number;

    constructor(time: string, cost: number) {
        if (cost < 0) {
            throw new Error('Cost cannot be negative');
        }
        this.time = time;
        this.cost = cost;
    }
}
