import { Building, Users, Car, CheckCircle, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: "1000+", label: "Insurance Completed", icon: <CheckCircle className="w-8 h-8 text-primary mb-2" /> },
    { number: "1840+", label: "Happy Clients", icon: <Users className="w-8 h-8 text-primary mb-2" /> },
    { number: "100+", label: "Car Loans Approved", icon: <Car className="w-8 h-8 text-primary mb-2" /> },
    { number: "423+", label: "Total Loans Approved", icon: <Building className="w-8 h-8 text-primary mb-2" /> }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted via-muted/50 to-background">
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="container mx-auto px-4"
      >
        <motion.h2 
          variants={item}
          className="text-4xl font-bold text-center mb-8"
        >
          About <span className="text-primary">Native Andhra</span>
        </motion.h2>
        
        <motion.div 
          variants={item}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <p className="text-lg mb-6">
            We provide comprehensive financial and documentation services including loans, RTO works, and essential documentation assistance. Our commitment to excellence and customer satisfaction has made us a trusted name in Visakhapatnam.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>D-No 46-13-35/1, Dondaparthy, Visakhapatnam</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              <span>+91 81258 88827</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              <span>idoonlineap@gmail.com</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          variants={container}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors duration-300"
            >
              {stat.icon}
              <h3 className="text-2xl font-bold mb-2">{stat.number}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={container}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div 
            variants={item}
            className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Car & Vehicle Loans
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                RTO Works & Documentation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                PAN Card Assistance
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Home & Business Loans
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Personal & Mortgage Loans
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Passport Assistance
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Insurance Services
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Car Rentals
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            variants={item}
            className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Professional expertise in all services
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Quick processing and approval
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Minimal documentation required
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Competitive interest rates
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Dedicated customer support
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Transparent processes
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Years of trusted service
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Comprehensive solutions
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={item}
          className="text-center mt-12"
        >
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <div className="space-y-2">
            <p>Phone: +91 81258 88827 / +91 95331 12277</p>
            <p>Email: idoonlineap@gmail.com</p>
            <p className="text-muted-foreground">
              We're here to assist you with all your financial and documentation needs.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;