const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const adminTypes = require("../data/adminTypes");

const adminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    adminType: {
      type: String,
      required: [true, "Admin type is required"],
      enum: {
        values: adminTypes,
        message: "{VALUE} is not a valid admin type",
      },
    },
    contactNumber: {
      type: String,
      required: [true, "Contact number is required"],
      match: [/^\d{10}$/, "Please enter a valid 10-digit contact number"],
    },
  },
  {
    timestamps: true,
  }
);

adminSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

adminSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("Admin", adminSchema);
