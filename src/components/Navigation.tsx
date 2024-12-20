import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Licence', href: '/services/driving-licence' },
    { name: 'Registration', href: '/services/registration' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Top Bar with Contact Info */}
        <div className="hidden md:flex justify-end items-center space-x-6 text-sm text-gray-300 mb-4">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>+91 8125888827, +91 9533112277</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>idoonlineap@gmail.com</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">
            Native Andhra
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`nav-link ${
                  location.pathname === link.href ? 'text-primary-hover' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="hero-button ml-4">
              Call Us Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm py-4">
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-white hover:text-primary-hover transition-colors ${
                    location.pathname === link.href ? 'text-primary-hover' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="hero-button text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Call Us Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;