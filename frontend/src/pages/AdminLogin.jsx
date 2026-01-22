import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Shield, ArrowLeft, User, Lock, ChevronDown, Sparkles } from "lucide-react";
import { adminTypes } from "../data/adminTypes";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    adminType: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // UI only - no validation
    console.log("Admin login:", formData);
  };

  return (
    <div className="page-container relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-admin/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 auth-container animate-fade-in">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Back to Home</span>
        </button>

        {/* Card */}
        <div className="glass-card rounded-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-admin/10 border border-admin/20 mb-4">
              <Shield className="w-8 h-8 text-admin" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Admin Login</h1>
            <p className="text-muted-foreground text-sm">
              Access the administrative dashboard
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email/Username Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                Email or Username
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email or username"
                  className="input-field pl-12"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="input-field pl-12"
                />
              </div>
            </div>

            {/* Admin Type Dropdown */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                Admin Type
              </label>
              <div className="relative">
                <select
                  name="adminType"
                  value={formData.adminType}
                  onChange={handleChange}
                  className="input-field pr-12 appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select admin type
                  </option>
                  {adminTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn-primary mt-6">
              Sign In
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground">
              Need assistance?{" "}
              <span className="text-admin hover:underline cursor-pointer">
                Contact IT Support
              </span>
            </p>
          </div>
        </div>

        {/* Brand Footer */}
        <div className="flex items-center justify-center gap-2 mt-8 text-muted-foreground">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm">Concept Promotions</span>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
