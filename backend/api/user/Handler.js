import { getUserByCredential, patchRefreshToken } from '../../services/user.js';
import generateAccessToken from '../../utils/generateAccessToken.js';
import generateRefreshToken from '../../utils/generateRefreshToken.js';
import tryCatch from '../../utils/tryCatch.js';
import users from './Model.js';
import bcrypt from 'bcrypt';

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
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(password, salt);
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
  const { dpassword, user } = await getUserByCredential(email, password);
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
});

const updateTokenUserHandler = tryCatch(async (req, res) => {
  const { user } = req;
  if (req.body['refreshToken']) {
    res
      .status(200)
      .json({ success: true, accessToken: generateAccessToken({ user }) });
  } else {
    const err = new Error('Forbidden: Refresh Token is expired!');
    err.statusCode = 403;
    throw err;
  }
});

export { loginUserHandler, registerUserHandler, updateTokenUserHandler };
