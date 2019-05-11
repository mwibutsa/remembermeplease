import bcrypt from 'bcryptjs';

export const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(12);
  return bcrypt.hashSync(password, salt);
};

export const verifyPassword = (unhashedPassword, hashedPassword) => {
  return bcrypt.compareSync(unhashedPassword, hashedPassword);
};
