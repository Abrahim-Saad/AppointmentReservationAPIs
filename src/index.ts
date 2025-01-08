import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv-flow/config';
import express from 'express';
import morgan from 'morgan';
import { container } from './shared/container/container';
import { InMemoryEventBus } from './shared/infrastructure/inMemoryEventBus';
container.register<InMemoryEventBus>('InMemoryEventBus', new InMemoryEventBus());

import slotRouter from './modules/DoctorAvailability/internals/controllers/routes/slot.routes';
import appointmentBookingRouter from './modules/AppointmentBooking/internals/presentation/routes';

const app = express();
const port = process.env.PORT;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1/', appointmentBookingRouter);
app.use('/api/v1/', slotRouter);

app.listen(port, () => {
  console.log(
    `Running in [${process.env.NODE_ENV} environment] at port: [${port}]`,
  );
});
