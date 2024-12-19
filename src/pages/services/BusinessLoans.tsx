import Navigation from "@/components/Navigation";
import { Check } from "lucide-react";

const BusinessLoans = () => {
  const features = [
    "Loans up to Rs.20 lakh",
    "No collateral required",
    "24-hour approval",
    "Minimal documentation",
    "Flexi Loan facility",
    "Online Account Access"
  ];

  const purposes = [
    "Increase business cash flow",
    "Renovate office",
    "Purchase equipment",
    "Upgrade technology",
    "Stock inventory",
    "Expand operations"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-24 container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Business Loan – Features and Benefits</h1>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-8">
            With small business loans up to Rs. 20 lakh, funding for your small business is now just 24 hours away.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Loan Purposes</h2>
              <ul className="space-y-3">
                {purposes.map((purpose, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    <span>{purpose}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Get Started</h3>
            <p className="mb-6">Contact us to discuss your business loan requirements</p>
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

export default BusinessLoans;