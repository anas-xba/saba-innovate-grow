import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "#" },
    { name: "Careers", href: "/careers" },
  ];

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/20 backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group animate-fade-in-left"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform duration-300 hover-glow">
              <span className="text-primary-foreground font-bold text-xl">S</span>
            </div>
            <span className="font-bold text-xl text-white hover:text-secondary transition-colors duration-300">
              sabagroup
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 animate-slide-in-down">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium text-white transition-all duration-300 hover:text-secondary relative group animate-fade-in-up stagger-${index + 1} ${
                  location.pathname === item.href
                    ? "text-secondary"
                    : ""
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Contact Us Button & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex animate-fade-in-right">
              <Button 
                variant="default" 
                size="sm" 
                className="bg-secondary text-secondary-foreground hover:bg-secondary-hover font-medium px-6 py-2 rounded-full transition-all duration-300 hover-lift micro-bounce"
              >
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white hover:text-secondary transition-colors duration-300 micro-bounce"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 pb-6' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium py-2 text-white transition-all duration-300 hover:text-secondary hover:translate-x-2 ${
                    location.pathname === item.href ? "text-secondary translate-x-2" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                variant="default" 
                size="sm" 
                className="bg-secondary text-secondary-foreground hover:bg-secondary-hover font-medium px-6 py-2 rounded-full mt-4 w-fit transition-all duration-300 hover-lift"
              >
                Contact Us
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;