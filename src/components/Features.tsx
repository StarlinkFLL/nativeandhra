import { Car, FileText, BookOpen, Shield, CarFront, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
  const features = [
    {
      icon: <Car className="w-12 h-12 text-primary" />,
      title: "Car & Vehicle Loans",
      description: "Get up to 100% finance with hassle-free processing, minimal documentation, and instant disbursal. EMIs starting from ₹2,250 per lac.",
      link: "/services/car-loans"
    },
    {
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: "RTO & Documentation",
      description: "Complete assistance for driving license, vehicle registration, and documentation services with professional support.",
      link: "/services/registration"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-primary" />,
      title: "Business & Personal Loans",
      description: "Quick business loans up to ₹20 lakh and personal loans with minimal documentation and fast approval.",
      link: "/services/business-loans"
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Insurance Services",
      description: "Comprehensive insurance solutions including vehicle, life, and health insurance with excellent coverage and support.",
      link: "/insurance"
    },
    {
      icon: <CarFront className="w-12 h-12 text-primary" />,
      title: "Car Rentals",
      description: "Wide range of vehicles available from top brands including Hyundai, Suzuki, Mahindra, and more with flexible rental options.",
      link: "/services/car-rentals"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          We offer comprehensive financial and documentation services tailored to meet your specific needs. Our experienced team ensures smooth processing and quick turnaround times.
        </p>
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