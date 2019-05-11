import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import session from 'express-session';
import events from './routes/events'

import './config/passport';

import userRouter from './routes/user';
import createAccount from './contollers/signup';

const port = process.env.PORT || 3000;
const app = express();

const users = app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());


app.use(passport.initialize());
app.use(passport.session());

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: process.env.SECRET
}));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to remember me please' });
});
app.use('/events', events);

app.use('/user', userRouter);

const server = app.listen(port, () => {
  console.log(`server started on port ${port}`);
});

export default server;
