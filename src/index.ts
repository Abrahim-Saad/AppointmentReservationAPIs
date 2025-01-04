import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv-flow/config';
import express from 'express';
import morgan from 'morgan';
import slotRouter from './modules/DoctorAvailability/controllers/slot.controller';

const app = express();
const port = process.env.PORT;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1/', slotRouter);

app.listen(port, () => {
  console.log(
    `Running in [${process.env.NODE_ENV} environment] at port: [${port}]`,
  );
});
