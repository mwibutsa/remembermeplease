import express from 'express';
import createAccount from '../contollers/signup';

const router = express.Router();

router.get('/', createAccount);

export default router;
