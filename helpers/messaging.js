import client from '../config/twilio-client';

const sendMessage = (
  type = 'whatsapp:',
  message,
  from = '+14155238886',
  to
) => {
  let sentMessage = '';
  client
    .create({
      from: `${type}${from}`,
      to: `${type}${to}`,
      body: `${message}`,
    })
    .then((message) => (sendMessage = message));
  return sentMessage;
};

export default sendMessage;
