import { Car, FileText, BookOpen, Shield, CarFront, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
  const features = [
    {
      icon: <Car className="w-12 h-12 text-primary" />,
      title: "Car & Vehicle Loans",
      description: "Get up to 100% finance with hassle-free processing and instant disbursal. EMIs starting from ₹2,250 per lac. Free RC transfer in 15 days. Loans up to ₹2.5 crore available.",
      link: "/services/car-loans"
    },
    {
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: "RTO & Documentation",
      description: "Complete assistance for driving license, vehicle registration, and documentation services. Includes fresh licenses, renewals, international permits, and all vehicle-related services.",
      link: "/services/registration"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-primary" />,
      title: "Business & Personal Loans",
      description: "Business loans up to ₹20 lakh and personal loans with minimal documentation. Quick approval within 24 hours. Flexible repayment options and competitive interest rates.",
      link: "/services/business-loans"
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Insurance Services",
      description: "Comprehensive insurance solutions including vehicle, life, and health insurance. Coverage for accidents, natural calamities, and third-party liability. Personal accident cover up to ₹15 lakhs.",
      link: "/insurance"
    },
    {
      icon: <CarFront className="w-12 h-12 text-primary" />,
      title: "Car Rentals",
      description: "Wide range of vehicles from top brands including Hyundai, Suzuki, Mahindra, Toyota, Honda, and more. Flexible rental periods with 24/7 customer support and doorstep delivery.",
      link: "/services/car-rentals"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          We offer comprehensive financial and documentation services tailored to meet your specific needs. Our experienced team ensures smooth processing and quick turnaround times with professional expertise.
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
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
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