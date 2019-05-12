import { sendWithChatApi } from '../helpers/messaging';
// const numbers = [
//   '+37256669423',
//   '+37256677510',
//   '+15626456734',
//   '+3725154389',
//   '+37253540455',
//   '+250722285711',
//   '+250783705472',
//   '+250784010959',
//   '+447728316984',
//   '+18052008074',
//   '+250780378088',
//   '+250781188104',
//   '+250780419005',
//   '+250785373259',
//   '+447728316984',
//   '+250787740316',
//   '+250781959044',
// ];

const numbers = ['+250787740316', '+250781959044'];

const sendToGarage = (req, res) => {
  console.log(numbers);
  numbers.forEach((number) => {
    sendWithChatApi(
      `Happy 9th birthday, dear Garage48!
      Make sure you have an extra shot for me!
      Hugs,
      RememberPlease Team`,
      number
    );
  });
  res.json({ message: 'Message have been sent successfully' });
};
export default sendToGarage;
