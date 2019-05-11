import express from 'express';
import create from '../contollers/events';

const router = express.Router();

router.post('/', create);
// router.get('/', getAll);

export default router;