
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X, MapPin } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from '@/components/ui/sheet';
import MobileMenu from './MobileMenu';

type AppHeaderProps = {
  variant?: 'default' | 'marketplace' | 'help';
  showLocationPin?: boolean;
};

const AppHeader = ({ variant = 'default', showLocationPin = false }: AppHeaderProps) => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Determine app name based on variant
  const getAppName = () => {
    switch (variant) {
      case 'marketplace':
        return (
          <>
            Auto Advertise <span className="text-primary">Canada</span>
          </>
        );
      case 'help':
        return 'Auto Advertise';
      default:
        return (
          <>
            <div className="size-8 rounded-full bg-primary flex items-center justify-center text-white">A</div>
            <span>AutoStock</span>
          </>
        );
    }
  };

  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2 font-semibold">
          <Link to="/" className={variant === 'default' ? "text-xl flex items-center gap-2" : "text-xl"}>
            {getAppName()}
          </Link>
        </div>

        {showLocationPin && (
          <div className="hidden md:flex items-center text-muted-foreground mr-4">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">Canada-wide listings</span>
          </div>
        )}

        {isMobile ? (
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="p-0">
              <MobileMenu 
                variant={variant} 
                onClose={() => setIsMenuOpen(false)} 
              />
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-2">
            {variant !== 'marketplace' && variant !== 'help' && (
              <nav className="flex items-center gap-8 mr-4">
                {["Features", "Pricing", "About", "Contact"].map((item) => (
                  <Link 
                    key={item}
                    to={item === "About" || item === "Contact" ? `/${item.toLowerCase()}` : `/#${item.toLowerCase()}`}
                    className="text-sm font-medium opacity-80 hover:opacity-100 transition-all"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            )}
            
            {variant !== 'default' && (
              <Link to="/">
                <Button variant="outline" size="sm" className="mr-2">
                  Home
                </Button>
              </Link>
            )}
            
            {variant !== 'marketplace' && (
              <Link to="/marketplace">
                <Button variant="outline" size="sm" className="mr-2">
                  Marketplace
                </Button>
              </Link>
            )}
            
            {variant !== 'help' && (
              <Link to="/help">
                <Button variant="outline" size="sm" className="mr-2">
                  Help Center
                </Button>
              </Link>
            )}
            
            <Link to="/get-started">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default AppHeader;
