import express from 'express';
import createAccount from '../contollers/signup';

const router = express.Router();

router.post('/', createAccount);

export default router;
