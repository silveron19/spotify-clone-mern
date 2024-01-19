import express from 'express';
import {
  changeUserRoleHandler,
  loginUserHandler,
  registerUserHandler,
  updateTokenUserHandler,
} from './Handler.js';
import validateRefreshToken from '../../middleware/validateRefreshToken.js';
import checkRole from '../../middleware/checkRole.js';
import validateAccessToken from '../../middleware/validateAccessToken.js';

const router = express.Router();

//User
router.post('/user/register', registerUserHandler);
router.post('/user/login', loginUserHandler);
router.patch('/user/token', validateRefreshToken, updateTokenUserHandler);

//Admin
router.patch(
  '/admin/role',
  validateAccessToken,
  checkRole,
  changeUserRoleHandler
);

export default router;
