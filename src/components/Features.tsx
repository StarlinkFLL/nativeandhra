import { Car, FileText, BookOpen, Shield, CarFront, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
  const features = [
    {
      icon: <Car className="w-12 h-12 text-primary" />,
      title: "Car Loans",
      description: "Get the best car loan rates with easy documentation and quick approval process.",
      link: "/loans"
    },
    {
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: "PAN Card & RTO Works",
      description: "Professional assistance with PAN card applications and RTO-related services.",
      link: "/rto"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-primary" />,
      title: "Passport Services",
      description: "Streamlined passport application and renewal services.",
      link: "/services"
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Insurance",
      description: "Comprehensive insurance solutions for vehicles and more.",
      link: "/insurance"
    },
    {
      icon: <CarFront className="w-12 h-12 text-primary" />,
      title: "Car Rentals",
      description: "Wide range of vehicles available for rent at competitive prices.",
      link: "/services"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <Link
                  to={feature.link}
                  className="inline-flex items-center text-primary hover:text-primary/80"
                >
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;