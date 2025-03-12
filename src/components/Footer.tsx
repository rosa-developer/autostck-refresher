
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Info */}
          <div className="animate-fade-in">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="size-8 rounded-full bg-primary flex items-center justify-center text-white">A</div>
              <span>AutoStock</span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Simplifying inventory management for businesses of all sizes.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary shrink-0 mr-3" />
                <span className="text-sm">1234 Stock Avenue, Suite 500<br />San Francisco, CA 94107</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary shrink-0 mr-3" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary shrink-0 mr-3" />
                <span className="text-sm">contact@autostock.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in animation-delay-100">
            <h4 className="text-base font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Features", "Pricing", "About", "Contact", "Blog", "Careers", "Press"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center text-sm">
                    <ChevronRight className="h-3 w-3 mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="animate-fade-in animation-delay-200">
            <h4 className="text-base font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {["Help Center", "Documentation", "API Reference", "Community", "Case Studies", "Webinars", "Partners"].map((item) => (
                <li key={item}>
                  <Link to={`/resources/${item.toLowerCase().replace(/ /g, "-")}`} className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center text-sm">
                    <ChevronRight className="h-3 w-3 mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="animate-fade-in animation-delay-300">
            <h4 className="text-base font-semibold mb-4">Subscribe to our newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest updates, news and product offers delivered to your inbox.
            </p>
            <form className="mb-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  required
                />
                <button
                  type="submit"
                  className="button-hover inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-xs text-muted-foreground">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} AutoStock. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
