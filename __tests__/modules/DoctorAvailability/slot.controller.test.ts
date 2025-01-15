import request from 'supertest';
import initializeDependencies from '../../../src/shared/dependencies/register.dependency';
import app from '../../../src/index'; // Assuming your Express app is exported from this file
import SlotService from '../../../src/modules/DoctorAvailability/internals/services/slot.service';
import CreateSlotDTO from '../../../src/modules/DoctorAvailability/internals/controllers/dtos/createSlot.dto';
import { describe, expect, it, jest, beforeAll, afterEach } from '@jest/globals';
import SlotDTO from '../../../src/shared/dto/slot.dto';

// Mock the entire service module
jest.mock('../../../src/modules/DoctorAvailability/internals/services/slot.service');

describe('Slot Controller Tests', () => {
    beforeAll(() => {
        initializeDependencies();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('POST /api/v1/slots', () => {
        it('should successfully create a new slot', async () => {
            const createSlotDto: CreateSlotDTO = {
                time: new Date().toISOString(),
                cost: 100
            };

            // Mock the `addSlot` method to resolve with a success message
            (SlotService.prototype.addSlot as jest.Mock).mockResolvedValue(
                { message: 'Slot created successfully' } as never
            );

            const response = await request(app)
                .post('/api/v1/slots')
                .send(createSlotDto)
                .expect('Content-Type', /json/)
                .expect(201);

            // Assert the response body
            expect(response.body).toEqual({ message: 'Slot created successfully' });

            // Verify that the service was called with the correct arguments
            expect(SlotService.prototype.addSlot).toHaveBeenCalledWith(createSlotDto);
        });
    });

    describe('GET /api/v1/slots', () => {
        it('should successfully retrieve the list of slots', async () => {
            const mockSlots = [
                {
                    ID: '45f0df08-057f-4574-8568-0823ee8dde26',
                    time: '22/03/2025 05:30 pm',
                    isReserved: true,
                    cost: 900
                },
                {
                    ID: '87518e49-eb76-4f22-878b-b21593d69fba',
                    time: '22/02/2025 04:30 pm',
                    isReserved: false,
                    cost: 100
                }
            ];

            // Mock the `listSlots` method to resolve with mock data
            (SlotService.prototype.listSlots as jest.Mock).mockResolvedValue(mockSlots as never);
            
            const response = await request(app)
                .get('/api/v1/slots')
                .expect('Content-Type', /json/)
                .expect(200);

            // Assert the response body is an array and not empty
            console.log("response body", response.body);
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body.length).toBeGreaterThan(0);

            response.body.forEach((slot: SlotDTO) => {
                expect(slot).toHaveProperty('ID', expect.any(String));
                expect(slot).toHaveProperty('time', expect.any(String));
                expect(slot).toHaveProperty('isReserved', expect.any(Boolean));
                expect(slot).toHaveProperty('cost', expect.any(Number));
            });


            // Verify that the service was called
            expect(SlotService.prototype.listSlots).toHaveBeenCalled();
        });

        it('should return a 500 error if there is an issue retrieving slots', async () => {
            // Mock the `listSlots` method to throw an error
            (SlotService.prototype.listSlots as jest.Mock).mockImplementation(() => {
                throw new Error('Database error');
            });

            const response = await request(app)
                .get('/api/v1/slots')
                .expect('Content-Type', /json/)
                .expect(500);

            // Assert the response body
            expect(response.body).toEqual({ message: 'Error listing slots', error: expect.anything() });
        });
    });

});
