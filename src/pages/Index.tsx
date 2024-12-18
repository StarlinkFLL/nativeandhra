import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { Card } from "@/components/ui/card";
import { ArrowRight, Car, Home, Shield, FileText, Briefcase, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Car, title: "Car Loans", desc: "Get the best rates for your dream car" },
              { icon: FileText, title: "RTO Works", desc: "Hassle-free documentation services" },
              { icon: Shield, title: "Insurance", desc: "Protect what matters most" },
              { icon: Home, title: "Home Loans", desc: "Make your dream home a reality" },
              { icon: Briefcase, title: "Business Loans", desc: "Grow your business with us" },
              { icon: Phone, title: "24/7 Support", desc: "We're here to help anytime" }
            ].map((feature, index) => (
              <Card key={index} className="p-6 bg-card hover:bg-card/80 transition-colors border-border">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.desc}</p>
                <button className="group flex items-center text-primary hover:text-primary-hover transition-colors">
                  Learn More 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="text-primary">Sumanth Associates</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              With years of experience in financial services, we provide comprehensive solutions
              tailored to your needs. Our team of experts ensures smooth processing and
              maximum customer satisfaction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { number: "10+", label: "Years Experience" },
                { number: "5000+", label: "Happy Clients" },
                { number: "95%", label: "Success Rate" }
              ].map((stat, index) => (
                <div key={index} className="p-4">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;