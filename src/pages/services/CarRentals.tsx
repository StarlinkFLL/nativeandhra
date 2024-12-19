import Navigation from "@/components/Navigation";
import { Check } from "lucide-react";

const CarRentals = () => {
  const brands = [
    "Hyundai",
    "Suzuki",
    "Mahindra",
    "Toyota",
    "Honda",
    "Ford",
    "Volkswagen",
    "Renault"
  ];

  const features = [
    "24/7 customer support",
    "Flexible rental periods",
    "Well-maintained vehicles",
    "Insurance coverage",
    "GPS navigation",
    "Doorstep delivery",
    "Multiple pickup locations"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-24 container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Car Rental Services</h1>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-8">
            Choose from our wide range of well-maintained vehicles for all your transportation needs.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Available Brands</h2>
              <ul className="space-y-3">
                {brands.map((brand, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    <span>{brand}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Service Features</h2>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Book Now</h3>
            <p className="mb-6">Contact us to reserve your vehicle</p>
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

export default CarRentals;