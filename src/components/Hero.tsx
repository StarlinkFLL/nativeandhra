import { ArrowDown, Phone, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d')] 
                   bg-cover bg-center bg-fixed"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90" />
      </motion.div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Professional Financial & 
          <span className="bg-gradient-to-r from-primary-hover to-primary bg-clip-text text-transparent"> Documentation Services</span>
        </motion.h1>
        
        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Your trusted partner for RTO works, vehicle loans, and comprehensive documentation solutions in Visakhapatnam.
        </motion.p>
        
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="/contact" className="hero-button inline-flex items-center group">
            <Phone className="mr-2 h-5 w-5" />
            Call Us Now
            <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Quick Service Highlights */}
      <div className="absolute bottom-20 left-0 right-0">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center"
          >
            {[
              "Car Loans",
              "PAN Card & RTO Works",
              "Passport",
              "Insurance",
              "Car Rentals"
            ].map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300"
              >
                <p className="text-white font-medium mb-2">{service}</p>
                <Link 
                  to="/services" 
                  className="text-primary-hover text-sm hover:underline inline-flex items-center"
                >
                  Read More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="text-white/50 w-6 h-6" />
      </motion.div>
    </div>
  );
};

export default Hero;