import users from '../api/user/Model.js';
import bcrypt from 'bcrypt';

async function getUserByCredential(email, password) {
  const user = await users.findOne({ email });
  const dpassword = await bcrypt.compare(password, user.password);
  const result = await users.findOne({
    email: user.email,
    password: user.password,
  });

  return { dpassword, user: result };
}

async function patchRefreshToken(user, token) {
  const result = await users.findOneAndUpdate(
    { email: user.email, password: user.password },
    { refreshToken: token },
    { new: true }
  );

  return result;
}

export { getUserByCredential, patchRefreshToken };
