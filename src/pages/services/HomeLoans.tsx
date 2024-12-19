import Navigation from "@/components/Navigation";
import { Check } from "lucide-react";

const HomeLoans = () => {
  const features = [
    "Loans up to ₹3.5 crore",
    "Interest rates starting at 7.5%",
    "Flexible tenor up to 240 months",
    "PMAY benefits available",
    "Easy Balance Transfer Facility",
    "Top-up loan up to ₹50 lakh"
  ];

  const benefits = [
    "Save up to ₹2.67 lakh through PMAY",
    "Minimal documentation",
    "No charges on part-prepayment",
    "Online account management",
    "Customised insurance schemes",
    "Property Dossier facility"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-24 container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Home Loan – Features and Benefits</h1>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-8">
            Whether you're looking to purchase, construct, or renovate a home, our Home Loan is the one-stop solution for your housing needs.
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
              <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Apply Now</h3>
            <p className="mb-6">Contact us to discuss your home loan requirements</p>
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

export default HomeLoans;