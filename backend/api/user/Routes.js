import express from 'express';
import {
  loginUserHandler,
  registerUserHandler,
  updateTokenUserHandler,
} from './Handler.js';
import validateRefreshToken from '../../middleware/validateRefreshToken.js';

const router = express.Router();

router.post('/user/register', registerUserHandler);
router.post('/user/login', loginUserHandler);
router.patch(
  '/user/token',
  validateRefreshToken,
  updateTokenUserHandler
);

export default router;
