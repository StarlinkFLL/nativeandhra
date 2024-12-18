import { Car, FileText, BookOpen, Shield, CarFront, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
  const features = [
    {
      icon: Car,
      title: "Car Loans",
      description: "Get the best rates for your dream vehicle",
      link: "/loans"
    },
    {
      icon: FileText,
      title: "PAN Card & RTO Works",
      description: "Hassle-free documentation services",
      link: "/rto"
    },
    {
      icon: BookOpen,
      title: "Passport",
      description: "Quick and efficient passport services",
      link: "/services"
    },
    {
      icon: Shield,
      title: "Insurance",
      description: "Protect what matters most",
      link: "/insurance"
    },
    {
      icon: CarFront,
      title: "Car Rentals",
      description: "Professional vehicle rental solutions",
      link: "/services"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our <span className="text-primary-hover">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-card rounded-lg hover:bg-card/80 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="w-12 h-12 text-primary-hover mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              <Link 
                to={feature.link}
                className="inline-flex items-center text-primary-hover hover:underline"
              >
                Read More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;