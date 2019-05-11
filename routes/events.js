import express from 'express';
import events from '../contollers/events';
import createValidation from './middleware/event.validation';

const router = express.Router();

router.post('/', createValidation, events.create);
router.get('/', events.getAll);

export default router;