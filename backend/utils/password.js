import bcrypt from 'bcrypt';

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(password, salt);

  return hash;
}

async function comparePassword(password, user) {
  return await bcrypt.compare(password, user.password);
}

export { hashPassword, comparePassword };
