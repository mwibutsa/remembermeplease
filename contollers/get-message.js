import { Message, Event } from '../models';

const getEventMessage = async (req, res) => {
  const { eventId } = req.params;
  const message = await Message.findOne({ where: { eventId, draft: true } });

  if (message) {
    res.status(200).json(message);
  } else {
    res.status(404).json({ error: 'No messages are saved for this event' });
  }
};

export default getEventMessage;
