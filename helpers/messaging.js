import client from '../config/twilio-client';
const sendMessage = (message, to) => {
  client.messages
    .create({
      from: `whatsapp:+14155238886`,
      to: `whatsapp:${to}`,
      body: `${message}`,
    })
    .then((message) => console.log(message))
    .catch((err) => console.log('====', err, '===='));
};

export default sendMessage;
