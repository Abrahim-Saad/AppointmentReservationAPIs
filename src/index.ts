import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv-flow/config';
import express from 'express';
import morgan from 'morgan';
import { container as EventBusContainer } from './shared/container/container';
import { container as AppointmentConfirmationContainer } from './modules/AppointmentConfirmation/container';
import { InMemoryEventBus } from './shared/infrastructure/inMemoryEventBus';
import INotificationService from './modules/AppointmentConfirmation/INotification.service';
import NotificationService from './modules/AppointmentConfirmation/notification.service';

EventBusContainer.register<InMemoryEventBus>('inMemoryEventBus', new InMemoryEventBus());
AppointmentConfirmationContainer.register<INotificationService>('notificationService', new NotificationService());

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
