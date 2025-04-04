
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Settings, 
  HelpCircle, 
  ShoppingCart, 
  User, 
  CreditCard, 
  Info, 
  Phone 
} from 'lucide-react';
import { motion } from 'framer-motion';

type MobileMenuProps = {
  variant?: 'default' | 'marketplace' | 'help';
  onClose: () => void;
};

const MobileMenu = ({ variant = 'default', onClose }: MobileMenuProps) => {
  const menuItems = [
    ...(variant !== 'default' ? [{
      title: 'Home',
      href: '/',
      icon: Home,
    }] : []),
    ...(variant === 'default' ? [
      {
        title: 'Features',
        href: '/#features',
        icon: Settings,
      },
      {
        title: 'Pricing',
        href: '/#pricing',
        icon: CreditCard,
      },
      {
        title: 'About',
        href: '/about',
        icon: Info,
      },
      {
        title: 'Contact',
        href: '/contact',
        icon: Phone,
      }
    ] : []),
    ...(variant !== 'marketplace' ? [{
      title: 'Marketplace',
      href: '/marketplace',
      icon: ShoppingCart,
    }] : []),
    ...(variant !== 'help' ? [{
      title: 'Help Center',
      href: '/help',
      icon: HelpCircle,
    }] : []),
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b">
        <div className="flex items-center gap-2 mb-4">
          {variant === 'default' && (
            <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white">
              A
            </div>
          )}
          <h2 className="text-lg font-bold">
            {variant === 'marketplace' ? 'Auto Advertise Canada' : 
             variant === 'help' ? 'Auto Advertise' : 'AutoStock'}
          </h2>
        </div>
      </div>
      
      <motion.div 
        className="flex-1 p-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <nav className="space-y-4">
          {menuItems.map((item) => (
            <motion.div key={item.title} variants={item}>
              <Link
                to={item.href}
                onClick={onClose}
                className="flex items-center gap-3 p-3 rounded-md hover:bg-secondary transition-colors"
              >
                <item.icon className="h-5 w-5 text-primary" />
                <span>{item.title}</span>
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.div>
      
      <div className="p-6 border-t mt-auto">
        <Link to="/get-started" onClick={onClose}>
          <Button className="w-full">
            <User className="mr-2 h-4 w-4" />
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
