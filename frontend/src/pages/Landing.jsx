import { useNavigate } from "react-router-dom";
import { Shield, Store, ChevronRight } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  const currYear = new Date().getFullYear();

  return (
    <div className="page-container relative overflow-hidden min-h-screen flex flex-col">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-admin/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto flex-1 flex flex-col justify-center">
        {/* Logo and Title Section */}
        <div className="text-center mb-12 animate-fade-in">
          <img 
            src="/site-logo.jpeg" 
            alt="Concept Promotions Logo" 
            className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 object-contain"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="text-gradient">Concept Promotions</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Select your portal to continue
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6">
          {/* Admin Card */}
          <button
            onClick={() => navigate("/admin/login")}
            className="group glass-card card-hover rounded-2xl p-4 sm:p-8 text-left"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:justify-between mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-admin/10 border border-admin/20 flex items-center justify-center group-hover:bg-admin/20 transition-colors duration-300">
                <Shield className="w-5 h-5 sm:w-7 sm:h-7 text-admin" />
              </div>
              <ChevronRight className="hidden sm:block w-5 h-5 text-muted-foreground group-hover:text-admin group-hover:translate-x-1 transition-all duration-300" />
            </div>
            <h2 className="text-base sm:text-xl font-semibold text-foreground mb-2 group-hover:text-admin transition-colors duration-300">
              Admin Portal
            </h2>
            <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-border/50">
              <span className="text-[10px] sm:text-xs font-medium text-admin/80 uppercase tracking-wider">
                Authorized Personnel Only
              </span>
            </div>
          </button>

          {/* Retailer Card */}
          <button
            onClick={() => navigate("/retailer/login")}
            className="group glass-card card-hover rounded-2xl p-4 sm:p-8 text-left"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:justify-between mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-retailer/10 border border-retailer/20 flex items-center justify-center group-hover:bg-retailer/20 transition-colors duration-300">
                <Store className="w-5 h-5 sm:w-7 sm:h-7 text-retailer" />
              </div>
              <ChevronRight className="hidden sm:block w-5 h-5 text-muted-foreground group-hover:text-retailer group-hover:translate-x-1 transition-all duration-300" />
            </div>
            <h2 className="text-base sm:text-xl font-semibold text-foreground mb-2 group-hover:text-retailer transition-colors duration-300">
              Retailer Portal
            </h2>
            <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-border/50">
              <span className="text-[10px] sm:text-xs font-medium text-retailer/80 uppercase tracking-wider">
                For Registered Retailers
              </span>
            </div>
          </button>
        </div>

      </div>

      {/* Footer */}
      <div className="relative z-10 text-center py-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <p className="text-muted-foreground text-sm">
          © {currYear} Concept Promotions. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Landing;
