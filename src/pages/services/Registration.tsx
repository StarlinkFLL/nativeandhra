import Navigation from "@/components/Navigation";
import { Check } from "lucide-react";

const Registration = () => {
  const services = [
    "Alteration of Vehicle",
    "Cancellation of RC",
    "Duplicate Registration",
    "Hire Purchase Termination",
    "Other State Transfer",
    "RC Renewal",
    "Theft Revocation",
    "Vehicle Stoppage"
  ];

  const additionalServices = [
    "Change of Address",
    "Hire Purchase Agreement",
    "Issue of NOC",
    "Reassignment of Vehicles",
    "Theft Intimation",
    "Transfer of Ownership",
    "Vehicle Stoppage Revocation"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-24 container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Registration Services</h1>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-8">
            We provide comprehensive vehicle registration services to make your documentation process smooth and hassle-free.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Primary Services</h2>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Additional Services</h2>
              <ul className="space-y-3">
                {additionalServices.map((service, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Get Started</h3>
            <p className="mb-6">Contact us for any registration related services</p>
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

export default Registration;