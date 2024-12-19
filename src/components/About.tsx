import { Building, Users, Car, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "1000+", label: "Insurance Completed", icon: <CheckCircle className="w-8 h-8 text-primary mb-2" /> },
    { number: "1840+", label: "Happy Clients", icon: <Users className="w-8 h-8 text-primary mb-2" /> },
    { number: "100+", label: "Car Loans Approved", icon: <Car className="w-8 h-8 text-primary mb-2" /> },
    { number: "423+", label: "Total Loans Approved", icon: <Building className="w-8 h-8 text-primary mb-2" /> }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Native Andhra</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg mb-6">
            We provide comprehensive financial and documentation services including loans, RTO works, and essential documentation assistance. Our commitment to excellence and customer satisfaction has made us a trusted name in Visakhapatnam.
          </p>
          <p className="text-muted-foreground">
            Located at D-No 46-13-35/1, 1st Floor, Sri Dwarapu Venkata Ramana Nilayam, Dondaparthy, Near Diamond Park, Visakhapatnam, we serve clients across Andhra Pradesh with professional expertise and dedication.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-card rounded-lg hover:scale-105 transition-transform duration-300">
              {stat.icon}
              <h3 className="text-2xl font-bold mb-2">{stat.number}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>• Car & Vehicle Loans</li>
              <li>• RTO Works & Documentation</li>
              <li>• PAN Card Assistance</li>
              <li>• Home & Business Loans</li>
              <li>• Personal & Mortgage Loans</li>
              <li>• Passport Assistance</li>
              <li>• Insurance Services</li>
              <li>• Car Rentals</li>
            </ul>
          </div>
          
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
            <ul className="space-y-2">
              <li>• Professional expertise in all services</li>
              <li>• Quick processing and approval</li>
              <li>• Minimal documentation required</li>
              <li>• Competitive interest rates</li>
              <li>• Dedicated customer support</li>
              <li>• Transparent processes</li>
              <li>• Years of trusted service</li>
              <li>• Comprehensive solutions</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <div className="space-y-2">
            <p>Phone: +91 81258 88827 / +91 95331 12277</p>
            <p>Email: idoonlineap@gmail.com</p>
            <p className="text-muted-foreground">
              We're here to assist you with all your financial and documentation needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;