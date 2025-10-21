import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import norahLogo from "@/assets/norah-gold.jpg";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4">
      <div className="text-center max-w-md mx-auto">
        <img
          src={norahLogo}
          alt="Norah Token"
          className="w-24 h-24 mx-auto rounded-full shadow-glow-purple mb-6"
        />
        <h1 className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigate("/")}
            className="bg-gradient-primary hover:shadow-glow-purple transition-all duration-300"
          >
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
