const jwt = require("jsonwebtoken");
const SuperAdmin = require("../models/SuperAdmin");
const Admin = require("../models/Admin");
const Retailer = require("../models/Retailer");
const adminTypes = require("../data/adminTypes");

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

exports.superAdminLogin = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide username, email, and password",
      });
    }

    const superAdmin = await SuperAdmin.findOne({ email, username });

    if (!superAdmin) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isPasswordMatch = await superAdmin.comparePassword(password);

    if (!isPasswordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = generateToken(superAdmin._id, "superadmin");

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      data: {
        id: superAdmin._id,
        username: superAdmin.username,
        email: superAdmin.email,
        role: "superadmin",
      },
    });
  } catch (error) {
    console.error("SuperAdmin login error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

exports.adminLogin = async (req, res) => {
  try {
    const { username, email, password, adminType } = req.body;

    if (!username || !email || !password || !adminType) {
      return res.status(400).json({
        success: false,
        message: "Please provide username, email, password, and admin type",
      });
    }

    if (!adminTypes.includes(adminType)) {
      return res.status(400).json({
        success: false,
        message: "Invalid admin type",
      });
    }

    const admin = await Admin.findOne({ email, username, adminType });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isPasswordMatch = await admin.comparePassword(password);

    if (!isPasswordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = generateToken(admin._id, "admin");

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      data: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
        adminType: admin.adminType,
        contactNumber: admin.contactNumber,
        role: "admin",
      },
    });
  } catch (error) {
    console.error("Admin login error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

exports.retailerLogin = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide username, email, and password",
      });
    }

    const retailer = await Retailer.findOne({ email, username });

    if (!retailer) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isPasswordMatch = await retailer.comparePassword(password);

    if (!isPasswordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = generateToken(retailer._id, "retailer");

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      data: {
        id: retailer._id,
        username: retailer.username,
        email: retailer.email,
        contactNumber: retailer.contactNumber,
        role: "retailer",
      },
    });
  } catch (error) {
    console.error("Retailer login error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

exports.createAdmin = async (req, res) => {
  try {
    const { adminType, username, email, password, contactNumber } = req.body;

    if (!adminType || !username || !email || !password || !contactNumber) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    if (!adminTypes.includes(adminType)) {
      return res.status(400).json({
        success: false,
        message: `Invalid admin type. Valid types are: ${adminTypes.join(", ")}`,
        validTypes: adminTypes,
      });
    }

    const existingAdmin = await Admin.findOne({
      $or: [{ email }, { username }],
    });

    if (existingAdmin) {
      return res.status(409).json({
        success: false,
        message: "Admin with this email or username already exists",
      });
    }

    const newAdmin = new Admin({
      adminType,
      username,
      email,
      password,
      contactNumber,
    });

    await newAdmin.save();

    res.status(201).json({
      success: true,
      message: "Admin created successfully",
      data: {
        id: newAdmin._id,
        username: newAdmin.username,
        email: newAdmin.email,
        adminType: newAdmin.adminType,
        contactNumber: newAdmin.contactNumber,
      },
    });
  } catch (error) {
    console.error("Create admin error:", error);
    
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors,
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};
