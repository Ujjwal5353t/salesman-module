const jwt = require("jsonwebtoken");
const SuperAdmin = require("../models/SuperAdmin");

exports.authenticate = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, no token provided",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(401).json({
      success: false,
      message: "Not authorized, invalid token",
    });
  }
};

exports.isSuperAdmin = async (req, res, next) => {
  try {
    if (req.user.role !== "superadmin") {
      return res.status(403).json({
        success: false,
        message: "Access denied. SuperAdmin privileges required.",
      });
    }

    const superAdmin = await SuperAdmin.findById(req.user.id);
    
    if (!superAdmin) {
      return res.status(403).json({
        success: false,
        message: "SuperAdmin not found",
      });
    }

    req.superAdmin = superAdmin;
    next();
  } catch (error) {
    console.error("SuperAdmin verification error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};
