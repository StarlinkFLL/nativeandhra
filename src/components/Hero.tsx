import { ArrowDown, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d')] 
                   bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-down">
          Two Wheeler Long Term
          <span className="text-primary-hover"> Key Benefits</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-up">
          We're prepared to handle your RTO works, vehicle loans, and PAN card needs with shocking and intense accuracy.
        </p>
        <Link to="/contact" className="hero-button inline-flex items-center animate-fade-up">
          <Phone className="mr-2 h-5 w-5" />
          Call Us Now
        </Link>
      </div>

      {/* Quick Service Highlights */}
      <div className="absolute bottom-20 left-0 right-0">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {[
              "Car Loans",
              "PAN Card & RTO Works",
              "Passport",
              "Insurance",
              "Car Rentals"
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-black/50 backdrop-blur-sm p-4 rounded-lg hover:bg-black/70 transition-all duration-300"
              >
                <p className="text-white font-medium mb-2">{service}</p>
                <Link 
                  to="/services" 
                  className="text-primary-hover text-sm hover:underline"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white/50 w-6 h-6" />
      </div>
    </div>
  );
};

export default Hero;