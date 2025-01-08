import SlotDTO from '../../../shared/dto/slot.dto';

export default interface ISlotFacade{
    listDoctorAvailableSlots(): SlotDTO[];
};