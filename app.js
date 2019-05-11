import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/user';
import createAccount from './contollers/signup';

const port = process.env.PORT || 3000;
const app = express();

const users = app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to remember me please' });
});

app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
