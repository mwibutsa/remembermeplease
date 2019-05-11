import fs from 'fs';
import path from 'path';
import { json } from 'body-parser';

const dataUrl = path.resolve(__dirname, '../database/users.json');
export const getUsers = () => {
  const user = fs.readFileSync(dataUrl, {
    encoding: 'utf8',
  });
  return JSON.parse(user);
};
export const create = (newUser) => {
  const allUsers = getUsers();
  allUsers.push(newUser);
  const updatedUsers = [...allUsers];
  fs.writeFileSync(dataUrl, JSON.stringify(updatedUsers));
  return newUser;
};

export default getUsers();
