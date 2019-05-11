import { create } from '../models/user';
const createAccount = (req, res) => {
  const user = create({ name: 'Mwibutsa Floribert', password: 'password' });

  res.json(user);
};

export default createAccount;
