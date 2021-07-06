const jwt = require("jsonwebtoken")
// models
// const {User} = require('../../models/User');

const SECRET_KEY = process.env.SECRET_KEY

exports.decode = (req, res, next) => {
  if (!req.headers['authorization']) {
    return res.status(400).json({ success: false, message: 'No access token provided' });
  }
  const accessToken = req.headers.authorization.split(' ')[1];
  try {
    const decoded = jwt.verify(accessToken, process.env.SECRET_KEY);
    req.user_id = decoded.id;
    req.user = decoded;
    return next();
  } catch (error) {
    return res.status(401).json({ success: false, message: error.message });
  }
}