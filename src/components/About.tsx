import { Building, Users, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Building,
      number: "1000+",
      label: "Insurance Completed"
    },
    {
      icon: Users,
      number: "1840+",
      label: "Happy Clients"
    },
    {
      icon: Clock,
      number: "100+",
      label: "Car Loans Approved"
    }
  ];

  const achievements = [
    "10+ years of experience in financial services",
    "Comprehensive documentation assistance",
    "Quick loan approvals within 24-48 hours",
    "Professional expertise in RTO works",
    "Dedicated customer support team",
    "Pan Andhra Pradesh coverage"
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            About <span className="text-primary-hover">Native Andhra</span>
          </h2>
          
          <div className="mb-12 text-muted-foreground">
            <p className="mb-4">
              Welcome to Native Andhra, your trusted partner for comprehensive financial and documentation services across Andhra Pradesh. With over a decade of experience, we've established ourselves as a leading service provider in Visakhapatnam and surrounding regions.
            </p>
            <p className="mb-4">
              We specialize in a wide range of services including Car Loans, RTO Works, PAN Card services, Home Loans, Business Loans, Personal Loans, Mortgage Loans, and Passport assistance. Our commitment to excellence and customer satisfaction has made us the preferred choice for thousands of clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-black/50 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 text-primary-hover mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary-hover mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-center">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-black/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary-hover">Why Choose Us?</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-center text-muted-foreground">
                  <span className="w-2 h-2 bg-primary-hover rounded-full mr-2"></span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 text-center text-muted-foreground">
            <p className="font-semibold">Our Address:</p>
            <p className="mt-2">
              D-No - 46-13-35/1, 1st Floor, Sri Dwarapu Venkata Ramana Nilayam,<br />
              Dondaparthy, Near Diamond Park, Ward - 15 Village,<br />
              Visakhapatnam (U) Mandal, Visakhapatnam District,<br />
              Pincode - 530016
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;