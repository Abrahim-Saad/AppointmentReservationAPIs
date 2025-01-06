import SlotDto from '../../../../../../shared/dto/slot.dto';


export default interface IViewAvailableSlotsUseCase {

    execute(): SlotDto[];
};