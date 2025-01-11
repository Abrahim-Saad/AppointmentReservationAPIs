import SlotDTO from '../../../shared/dto/slot.dto';

export default interface IAppointmentBookingGateway {
  listDoctorAvailableSlots(): SlotDTO[];
  getSlotByID(slotId: string): SlotDTO | null;
}
