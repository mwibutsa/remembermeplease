import express from 'express';
import events from '../contollers/events';
import createValidation from './middleware/event.validation';
import sendEventMessage from '../contollers/send-message';

const router = express.Router();

router.post('/:eventId/send-message', sendEventMessage);
router.post('/', createValidation, events.create);
router.get('/', events.getAll);

export default router;
