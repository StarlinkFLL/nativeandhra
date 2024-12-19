import Navigation from "@/components/Navigation";
import { Check } from "lucide-react";

const CarLoans = () => {
  const benefits = [
    "Up to 100% finance for used cars",
    "Hassle-free processing",
    "Minimal documentation",
    "Instant disbursal",
    "Loans up to Rs.2.5 crore",
    "3 to 6 times yearly income",
    "Maximum loan tenure of 60 months",
    "EMI starting from ₹2,250 per lac"
  ];

  const services = [
    "End-to-end advisory from research to title transfer",
    "Personalized help to choose a car",
    "Customized repayment plans",
    "Pocket-friendly EMIs",
    "Loan disbursal in 48 hrs",
    "Free RC transfer in 15 days"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-24 container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Used Car Loan - Get Upto 100% loan on your car</h1>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-8">
            We provide up to 100% finance for used cars, with hassle-free processing, minimal documentation and instant disbursal.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Unmatched Service</h2>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to get started?</h3>
            <p className="mb-6">Contact us now to discuss your car loan requirements</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+918125888827" className="hero-button">
                Call: +91 8125888827
              </a>
              <a href="tel:+919533112277" className="hero-button">
                Call: +91 9533112277
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarLoans;