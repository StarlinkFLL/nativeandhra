import Navigation from "@/components/Navigation";
import { Check } from "lucide-react";

const PersonalLoans = () => {
  const benefits = [
    "No collateral required",
    "Minimal Documentation",
    "Easy Approval",
    "Multipurpose in nature",
    "Loan amount up to ₹50 lacs",
    "Flexible repayment options",
    "Quick disbursement"
  ];

  const eligibility = [
    "Age: 18/21 years - 60/65 years",
    "Credit Score: 750 or above",
    "Minimum Net Income: ₹15,000 (non-metro)",
    "Work Experience: 6-12 months (salaried)",
    "Business tenure: 3 years (self-employed)"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-24 container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Personal Loan – Low interest rate personal loans</h1>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-8">
            Personal loans are an unsecured form of credit that is popular to meet immediate requirements. Perfect for wedding, home renovation, travel purposes and more.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
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

            <div className="bg-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Eligibility</h2>
              <ul className="space-y-3">
                {eligibility.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Apply Now</h3>
            <p className="mb-6">Contact us to discuss your loan requirements</p>
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

export default PersonalLoans;