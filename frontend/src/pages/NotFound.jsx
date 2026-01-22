import { useNavigate } from "react-router-dom";
import { Home, Sparkles } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="text-center animate-fade-in">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
          <Sparkles className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-6xl font-bold text-gradient mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! Page not found
        </p>
        <button
          onClick={() => navigate("/")}
          className="btn-primary inline-flex items-center gap-2 w-auto"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
