import { Message, Event } from '../models';
import sendMessage from '../helpers/messaging';
import select from 'lodash';
const sendEventMessage = async (req, res) => {
  const { content, sendTo } = req.body;
  const { eventId } = req.params;
  const draft = req.query.draft ? true : false;
  const userId = 1;

  const textMessage = { content, eventId, userId, draft };
  const message = await Message.create(textMessage);
  let event = await Event.findOne({ where: { id: eventId } });
  event = select.pick(event, ['phonenumber', 'type', 'target']);
  if (!draft) {
    if (event && Object.keys(event).length) {
      sendMessage(content, event.phonenumber);
    }
  }
  res.status(201).json({ message });
};

export default sendEventMessage;
