
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="container px-4 mx-auto py-20 text-center">
          <div className={cn(
            "glass rounded-2xl p-8 md:p-16 max-w-2xl mx-auto",
            "animate-fade-in"
          )}>
            <h1 className="text-8xl font-bold text-primary mb-6 animate-slide-up">404</h1>
            <h2 className="text-3xl font-bold mb-6 animate-slide-up animation-delay-100">Page not found</h2>
            <p className="text-muted-foreground mb-8 animate-slide-up animation-delay-200">
              We're sorry, the page you requested could not be found. 
              Please check the URL or navigate back to the home page.
            </p>
            <Link
              to="/"
              className="button-hover inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring animate-slide-up animation-delay-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
