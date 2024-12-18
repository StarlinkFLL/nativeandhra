import { Building, Users, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Building,
      number: "10+",
      label: "Years Experience"
    },
    {
      icon: Users,
      number: "5000+",
      label: "Happy Clients"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Customer Support"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-primary-hover">Native Andhra</span>
          </h2>
          <p className="text-muted-foreground mb-12">
            We offer professional, reliable services across Andhra Pradesh. Whether you need help with 
            RTO-related documentation, car loans, PAN card applications, or passport services, we provide 
            accurate and efficient solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-black/50 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 text-primary-hover mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary-hover mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-12 text-muted-foreground">
            Based in Visakhapatnam, Andhra Pradesh
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;