import SlotDto from '../../../shared/dto/slot.dto';

export default interface ISlotFacade{
    listDoctorAvailableSlots(): SlotDto[];
};