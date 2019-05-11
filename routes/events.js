import express from 'express';
import events from '../contollers/events';
import createValidation from './middleware/event.validation';
import sendEventMessage from '../contollers/send-message';
import getEventMessage from '../contollers/get-message';
import editMessage from '../contollers/edit-messages';

const router = express.Router();

router.put('/:eventId/edit-message/:messageId', editMessage);
router.post('/:eventId/send-message', sendEventMessage);
router.post('/', createValidation, events.create);
router.get('/:eventId/messages', getEventMessage);
router.get('/', events.getAll);

export default router;
