import {
  getUserByCredential,
  getUserByEmail,
  patchRefreshToken,
  patchUserRole,
} from '../../services/user.js';
import generateAccessToken from '../../utils/generateAccessToken.js';
import generateRefreshToken from '../../utils/generateRefreshToken.js';
import { hashPassword } from '../../utils/password.js';
import tryCatch from '../../utils/tryCatch.js';
import users from './Model.js';

const registerUserHandler = tryCatch(async (req, res) => {
  const {
    email,
    password,
    username,
    birth_date,
    gender,
    country,
    shared_data,
  } = req.body;
  if (
    !email ||
    !password ||
    !username ||
    !birth_date ||
    !gender ||
    !country ||
    !shared_data ||
    Object.keys(req.body).length !== 7
  ) {
    res.status(400);
    throw new Error('All field are mandatory');
  }
  const user = await getUserByCredential(email, password);
  if (user != null) {
    const err = new Error('Email has been registered!');
    err.statusCode = 400;
    throw err;
  }
  const hash = await hashPassword(password);
  const result = await users.create({
    email,
    password: hash,
    username,
    birth_date,
    gender,
    country,
    shared_data,
  });

  return res
    .status(200)
    .json({ success: true, message: 'Successfully Registered', data: result });
});

const loginUserHandler = tryCatch(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password || Object.keys(req.body).length !== 2) {
    res.status(400);
    throw new Error('All field are mandatory');
  }
  const result = await getUserByCredential(email, password);
  if (result === null) {
    const err = new Error("Email hasn't been registered!");
    err.statusCode = 400;
    throw err;
  } else {
    const { dpassword, user } = result;

    if (user.email === email && dpassword) {
      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);
      const result = await patchRefreshToken(user, refreshToken);
      res
        .status(200)
        .json({ success: true, accessToken, refreshToken, data: result });
    } else {
      const err = new Error('User not found!');
      err.statusCode = 404;
      throw err;
    }
  }
});

const updateTokenUserHandler = tryCatch(async (req, res) => {
  const { email } = req.user.data;
  const user = await getUserByEmail(email);
  if (user) {
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    const result = await patchRefreshToken(user, refreshToken);
    res
      .status(200)
      .json({ success: true, accessToken, refreshToken, data: result });
  } else {
    const err = new Error('User not found!');
    err.statusCode = 404;
    throw err;
  }
});

const changeUserRoleHandler = tryCatch(async (req, res) => {
  const { email, role } = req.body;

  const result = await patchUserRole(email, role);
  if (result.length === 0) {
    const err = new Error('User not found!');
    err.statusCode = 404;
    throw err;
  }
  res
    .status(200)
    .json({ success: true, message: 'Role update successful', data: result });
});

export {
  loginUserHandler,
  registerUserHandler,
  updateTokenUserHandler,
  changeUserRoleHandler,
};
