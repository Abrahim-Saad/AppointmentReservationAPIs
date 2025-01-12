import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv-flow/config';
import express from 'express';
import morgan from 'morgan';

import containerRegistry from './shared/container/containerRegistry';

containerRegistry();

import slotRouter from './modules/DoctorAvailability/internals/controllers/routes/slot.routes';
import appointmentBookingRouter from './modules/AppointmentBooking/internals/presentation/routes';
import AppointmentManagementRouter from './modules/DoctorAppointmentManagement/internals/shell/controllers/routes/appointmentManagement.route';

const app = express();
const port = process.env.PORT;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1/', appointmentBookingRouter);
app.use('/api/v1/', slotRouter);
app.use('/api/v1/', AppointmentManagementRouter);
app.listen(port, () => {
  console.log(
    `Running in [${process.env.NODE_ENV} environment] at port: [${port}]`,
  );
});
