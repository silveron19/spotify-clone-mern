import users from '../api/user/Model.js';
import { comparePassword } from '../utils/password.js';

async function getUserByCredential(email, password) {
  const user = await getUserByEmail(email);
  if (user === null) {
    return null;
  }
  const dpassword = await comparePassword(password, user);
  const result = await users.findOne({
    email: user.email,
    password: user.password,
  });

  return { dpassword, user: result };
}

async function getUserByEmail(email) {
  const result = await users.findOne({ email });
  return result;
}

async function patchRefreshToken(user, token) {
  const result = await users.findOneAndUpdate(
    { email: user.email, password: user.password },
    { refreshToken: token },
    { new: true }
  );

  return result;
}

async function patchUserRole(email, role) {
  const result = await users.findOneAndUpdate(
    { email },
    { role },
    { new: true }
  );

  return result;
}

export {
  getUserByCredential,
  patchRefreshToken,
  getUserByEmail,
  patchUserRole,
};
