const checkRole = (req, res, next) => {
  if (!req.user.data.role) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  if (req.user.data.role === 'superadmin') {
    return next();
  }

  return res.status(403).json({ message: 'Access denied' });
};

export default checkRole;
