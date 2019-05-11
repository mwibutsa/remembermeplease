import { create, getUsers } from '../models/user';
const createAccount = (req, res) => {
  const user = create({ name: 'Mwibutsa Floribert', password: 'password' });
  if (user.length) {
    res.json(user);
  } else {
    res.json({ error: 'User is already registered' });
  }
};

export default createAccount;
