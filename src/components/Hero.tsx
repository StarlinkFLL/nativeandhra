import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] 
                   bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-down">
          Simplifying Loans, RTO, and
          <span className="text-primary-hover"> Insurance Solutions</span> for You
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-up">
          Your trusted partner for all financial and documentation services
        </p>
        <a href="#contact" className="hero-button inline-block animate-fade-up">
          Get Started
        </a>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white/50 w-6 h-6" />
      </div>
    </div>
  );
};

export default Hero;