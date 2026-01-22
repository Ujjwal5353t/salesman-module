import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Crown, ArrowLeft, User, Lock, Sparkles } from "lucide-react";

const MasterAdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Master Admin login:", formData);
  };

  return (
    <div className="page-container relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl" />
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 mb-4">
              <Crown className="w-8 h-8 text-yellow-500" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Master Admin</h1>
            <p className="text-muted-foreground text-sm">
              Restricted access - Authorized personnel only
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter master admin username"
                  className="input-field pl-12"
                  required={true}
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
                  required={true}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-xl transition-colors duration-200 mt-6"
            >
              Access Master Panel
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t border-border/50 text-center">
            <p className="text-xs text-muted-foreground">
              ⚠️ Unauthorized access attempts will be logged
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

export default MasterAdminLogin;
