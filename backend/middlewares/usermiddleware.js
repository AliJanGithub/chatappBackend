const jwt = require('jsonwebtoken');
const userModel = require('../models/usemodel'); // Adjust the path according to your project structure

const authMiddleware = async (req, res, next) => {
  try {
    // Extract token from Authorization header
    const authHeader = req.header("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: 'No token provided or malformed token' });
    }

    const token = authHeader.split(" ")[1];

    // Verify token
    const decoded = jwt.verify(token, 'itssecret'); // Use your secret key
    console.log(decoded);

    // Find user by ID from the token
    const user = await userModel.findById(decoded.userid);
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Attach user to request object
    req.user = user;
    next();
  } catch (err) {
    console.error("Token verification error:", err);
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
