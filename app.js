import express from 'express';
import bodyParser from 'body-parser';
import events from './routes/events';
import upcomingEvents from './helpers/check-dates';
import getTodaysEvents from './helpers/todaysEvents';
import sendMessage from './helpers/messaging';
import path from 'path';
import cors from 'cors';
import nofifyer from 'node-cron';
import './config/passport';

import userRouter from './routes/user';
import { FieldValueInstance } from 'twilio/lib/rest/autopilot/v1/assistant/fieldType/fieldValue';

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use(express.static(path.resolve(__dirname, 'views')));
app.use(express.static(path.resolve(__dirname, 'views/front-end')));
// nofifyer.schedule('* * * * *', async () => {
//   const events = await upcomingEvents();
//   events.forEach((event) => {
//     const message = `Hello ${event.firstname} ${event.lastname} Your ${
//       event.target
//     }'s ${event.type} Is happening in ${event.notificationTime} days`;
//     sendMessage(message, event.user_phone);
//   });
// });
nofifyer.schedule('* * * * * *', async () => {
  const events = await upcomingEvents();
  events.forEach((event) => {
    const message = `Hello ${event.firstname} ${event.lastname} Your ${
      event.target
      }'s ${event.type} Is happening in ${event.notificationTime} days`;
    sendMessage(message, event.user_phone);
  });

  // const todaysEvents = await getTodaysEvents();
  // console.log(todaysEvents);
  // todaysEvents.forEach((event) => {
  //   if (event.messages.length === 0) {
  //     const message = `Hello ${event.firstname} ${event.lastname} Your ${
  //       event.target
  //       }'s ${event.type} Is happening in today`;
  //     console.log(event);

  //     sendMessage(message, event.User.phonenumber);
  //   }
  //   console.log(event);
  // })

});
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to remember me please' });
});
app.use('/events', events);

app.use('/user', userRouter);

const server = app.listen(port, () => {
  console.log(`server started on port ${port}`);
});

export default server;
