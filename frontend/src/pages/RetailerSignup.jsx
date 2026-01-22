import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Store, ArrowLeft, User, Mail, Lock, Building, Sparkles } from "lucide-react";

const RetailerSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // UI only - no validation
    console.log("Retailer signup:", formData);
  };

  return (
    <div className="page-container relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-retailer/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 auth-container animate-fade-in">
        {/* Back Button */}
        <button
          onClick={() => navigate("/retailer/login")}
          className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Back to Login</span>
        </button>

        {/* Card */}
        <div className="glass-card rounded-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-retailer/10 border border-retailer/20 mb-4">
              <Store className="w-8 h-8 text-retailer" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Create Account</h1>
            <p className="text-muted-foreground text-sm">
              Join Concept Promotions as a retailer
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Business Name Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                Business Name
              </label>
              <div className="relative">
                <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Enter your business name"
                  className="input-field pl-12"
                />
              </div>
            </div>

            {/* Full Name Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="input-field pl-12"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
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
                  placeholder="Create a password"
                  className="input-field pl-12"
                />
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="input-field pl-12"
                />
              </div>
            </div>

            {/* Terms Notice */}
            <p className="text-xs text-muted-foreground text-center">
              By creating an account, you agree to our{" "}
              <span className="text-retailer hover:underline cursor-pointer">Terms of Service</span>
              {" "}and{" "}
              <span className="text-retailer hover:underline cursor-pointer">Privacy Policy</span>
            </p>

            {/* Submit Button */}
            <button type="submit" className="btn-primary">
              Create Account
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/retailer/login")}
                className="text-retailer hover:underline font-medium"
              >
                Sign In
              </button>
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

export default RetailerSignup;
