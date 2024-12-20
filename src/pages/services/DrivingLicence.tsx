import Navigation from "@/components/Navigation";
import { Check } from "lucide-react";

const DrivingLicence = () => {
  const services = [
    "Fresh Driving License",
    "Learning License",
    "License Renewal",
    "Duplicate License",
    "International Driving Permit",
    "Address Change",
    "Category Addition"
  ];

  const requirements = [
    "Age proof document",
    "Address proof document",
    "Identity proof",
    "Passport size photographs",
    "Medical certificate (if applicable)",
    "Previous license (for renewal)",
    "Form 1A for Learning License"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-24 container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Driving License Services</h1>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-8">
            We provide comprehensive assistance for all driving license related services, making the process simple and efficient.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
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
              <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Apply Now</h3>
            <p className="mb-6">Contact us for any driving license related services</p>
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

export default DrivingLicence;