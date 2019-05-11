import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

export default (client = new twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH_TOKEN
));
