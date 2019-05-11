import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import session from 'express-session';
import socialRouter from './routes/socialLogin'

import './config/passport';

const port = process.env.PORT || 3000;
const app = express();

app.unsubscribe(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: process.env.SECRET
}));

app.use('/auth', socialRouter);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
