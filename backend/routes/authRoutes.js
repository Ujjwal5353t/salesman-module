const express = require("express");
const router = express.Router();
const {
  superAdminLogin,
  adminLogin,
  retailerLogin,
  createAdmin,
} = require("../controller/authController");
const { authenticate, isSuperAdmin } = require("../middlewares/authMiddleware");

router.post("/superadminkalogin12345", superAdminLogin);
router.post("/admin/create", authenticate, isSuperAdmin, createAdmin);

router.post("/admin/login", adminLogin);
router.post("/retailer/login", retailerLogin);

module.exports = router;
