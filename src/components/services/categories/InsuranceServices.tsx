import { Link } from "react-router-dom";
import { ArrowRight, Shield } from "lucide-react";

const InsuranceServices = () => {
  const insuranceTypes = [
    {
      title: "Two Wheeler Insurance",
      description: "Comprehensive coverage for your bike including accidents, theft, and third-party liability",
      link: "/insurance/two-wheeler"
    },
    {
      title: "Car Insurance",
      description: "Complete protection for your car with cashless claims and extensive network coverage",
      link: "/insurance/four-wheeler"
    },
    {
      title: "Life Insurance",
      description: "Secure your family's future with comprehensive life insurance plans",
      link: "/insurance/life"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {insuranceTypes.map((insurance, index) => (
        <div key={index} className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300">
          <Shield className="w-8 h-8 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">{insurance.title}</h3>
          <p className="text-muted-foreground mb-4">{insurance.description}</p>
          <Link 
            to={insurance.link}
            className="inline-flex items-center text-primary hover:text-primary/80 group"
          >
            Learn More 
            <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default InsuranceServices;