
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        isScrolled 
          ? "py-3 glass shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 font-bold text-xl tracking-tight animate-fade-in"
        >
          <div className="size-8 rounded-full bg-primary flex items-center justify-center text-white">A</div>
          <span>AutoStock</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["Features", "Pricing", "About", "Contact"].map((item, i) => (
            <Link 
              key={item}
              to={`/#${item.toLowerCase()}`}
              className={cn(
                "text-sm font-medium opacity-80 hover:opacity-100 transition-all",
                "animate-fade-in",
                { "animation-delay-100": i === 0 },
                { "animation-delay-200": i === 1 },
                { "animation-delay-300": i === 2 },
                { "animation-delay-400": i === 3 }
              )}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block animate-fade-in animation-delay-500">
          <Link
            to="/get-started"
            className="button-hover inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-secondary"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-x-0 top-[72px] p-4 md:hidden glass border-t border-white/20 shadow-md",
          "transition-all duration-300 ease-in-out transform",
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        )}
      >
        <nav className="flex flex-col gap-5 py-4">
          {["Features", "Pricing", "About", "Contact"].map((item) => (
            <Link 
              key={item}
              to={`/#${item.toLowerCase()}`}
              className="text-base font-medium block w-full py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link 
            to="/get-started"
            className="w-full mt-2 button-hover inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
