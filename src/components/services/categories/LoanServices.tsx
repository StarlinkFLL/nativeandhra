import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const LoanServices = () => {
  const loans = [
    {
      title: "Car Loans",
      description: "Get up to 100% finance with hassle-free processing and instant disbursal",
      link: "/services/car-loans"
    },
    {
      title: "Business Loans",
      description: "Small business loans up to ₹20 lakh with 24-hour approval",
      link: "/services/business-loans"
    },
    {
      title: "Home Loans",
      description: "Home loans up to ₹3.5 crore at interest rates starting from 7.5%",
      link: "/services/home-loans"
    },
    {
      title: "Personal Loans",
      description: "Quick personal loans with minimal documentation and easy approval",
      link: "/services/personal-loans"
    },
    {
      title: "Mortgage Loans",
      description: "Secure loans against property with flexible repayment options",
      link: "/services/mortgage-loans"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {loans.map((loan, index) => (
        <div key={index} className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-2">{loan.title}</h3>
          <p className="text-muted-foreground mb-4">{loan.description}</p>
          <Link 
            to={loan.link}
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

export default LoanServices;