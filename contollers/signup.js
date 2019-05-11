import db from '../models/index';
import { hashPassword, comparePassword } from '../helpers/user';
const { User } = db;
const createAccount = async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    phonenumber,
    region,
    birthday,
    password,
  } = req.body;
  User.create({
    firstname,
    lastname,
    email,
    phonenumber,
    region,
    birthday,
    password: hashPassword(password),
  })
    .then((user) => {
      console.log(user);
      res.status(201).json(user);
    })
    .catch((err) => res.status(500).json(err));
};

export default createAccount;
