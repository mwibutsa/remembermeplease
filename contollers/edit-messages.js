import { Message, Event } from '../models';

const editEventMessage = async (req, res) => {
  const { eventId, messageId } = req.params;
  const { content } = req.body;
  const message = await Message.update(
    { content },
    {
      where: { eventId, id: messageId },
      returning: true,
    }
  );

  if (message) {
    res.status(200).json(message[1][0]);
  } else {
    res.status(404).json({ error: 'No messages are saved for this event' });
  }
};

export default editEventMessage;
