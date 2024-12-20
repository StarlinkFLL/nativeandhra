import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const linkVariants = {
    hover: { 
      scale: 1.1,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      height: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: { 
      opacity: 1,
      height: "auto",
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/60 backdrop-blur-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Top Bar with Contact Info */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="hidden md:flex justify-end items-center space-x-6 text-sm text-gray-300 mb-4"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1"
          >
            <Phone className="w-4 h-4" />
            <span>+91 8125888827, +91 9533112277</span>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1"
          >
            <Mail className="w-4 h-4" />
            <span>idoonlineap@gmail.com</span>
          </motion.div>
        </motion.div>

        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="text-2xl font-bold text-white">
              Native Andhra
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                variants={linkVariants}
                whileHover="hover"
              >
                <Link
                  to={link.href}
                  className={`nav-link rounded-full px-6 py-2 ${
                    location.pathname === link.href 
                      ? 'bg-primary/20 text-primary-hover' 
                      : ''
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact" 
                className="hero-button ml-4 rounded-full"
              >
                Call Us Now
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-white bg-primary/20 p-2 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg py-4"
            >
              <div className="flex flex-col space-y-4 px-4">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    variants={menuItemVariants}
                    whileHover={{ x: 10 }}
                  >
                    <Link
                      to={link.href}
                      className={`block text-white hover:text-primary-hover transition-colors rounded-full px-4 py-2 ${
                        location.pathname === link.href 
                          ? 'bg-primary/20 text-primary-hover' 
                          : ''
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={menuItemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link
                    to="/contact"
                    className="hero-button block text-center rounded-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Call Us Now
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;