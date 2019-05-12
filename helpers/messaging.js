import client from '../config/twilio-client';
import request from 'request';
const sendMessage = (message, to) => {
  client.messages
    .create({
      from: `whatsapp:+14155238886`,
      to: `whatsapp:${to}`,
      body: `${message}`,
    })
    .then((message) => console.log('sent'))
    .catch((err) => console.log('====', err, '===='));
};

export const sendWithChatApi = (message, to) => {
  const url =
    'https://eu20.chat-api.com/instance40570/message?token=un1fkfld96tfhqf0';
  const data = {
    phone: to,
    body: message,
  };
  const testData = request(
    {
      url: url,
      method: 'POST',
      json: data,
    },
    (err, res, body) => {
      console.log('Message sent');
    }
  );
  console.log('=======', testData, '=======');
};

export default sendMessage;
