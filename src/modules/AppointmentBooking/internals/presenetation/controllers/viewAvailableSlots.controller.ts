import IViewAvailableSlotsUseCase from '../../application/usecases/viewAvailableSlots/IViewAvailableSlots.usecase';

export default class ViewAvailableSlotsController {

    viewAvailableSlotsUseCase: IViewAvailableSlotsUseCase;

    constructor(viewAvailableSlotsUseCase: IViewAvailableSlotsUseCase) {
        this.viewAvailableSlotsUseCase = viewAvailableSlotsUseCase;
    }

    handle(req: any, res: any) {
        try {
            const availableSlots = this.viewAvailableSlotsUseCase.execute();

            return res.status(200).json(availableSlots);
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error', error });
        }
    }
}
