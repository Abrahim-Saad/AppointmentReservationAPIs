import SlotDTO from '../../../../../../shared/dto/slot.dto';


export default interface IViewAvailableSlotsUseCase {

    execute(): SlotDTO[];
};