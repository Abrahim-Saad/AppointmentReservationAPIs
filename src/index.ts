import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv-flow/config';
import express from 'express';
import morgan from 'morgan';
import slotRouter from './modules/DoctorAvailability/internals/controllers/slot.controller';
import availableSlotsRouter from './modules/AppointmentBooking/internals/presenetation/routes/viewAvailableSlots.routes';

const app = express();
const port = process.env.PORT;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1/', slotRouter);
app.use('/api/v1/', availableSlotsRouter);

app.listen(port, () => {
  console.log(
    `Running in [${process.env.NODE_ENV} environment] at port: [${port}]`,
  );
});
