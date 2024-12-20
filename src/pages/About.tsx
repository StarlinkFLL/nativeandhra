import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Building, Users, Car, CheckCircle, MapPin, Phone, Mail, Award, Clock, Shield } from 'lucide-react';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stats = [
    { icon: <Users className="w-8 h-8 text-primary" />, number: "10,000+", label: "Happy Clients" },
    { icon: <Building className="w-8 h-8 text-primary" />, number: "15+", label: "Years Experience" },
    { icon: <Award className="w-8 h-8 text-primary" />, number: "98%", label: "Success Rate" },
    { icon: <Shield className="w-8 h-8 text-primary" />, number: "100%", label: "Secure Process" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-24 pb-16"
      >
        {/* Hero Section */}
        <div className="relative h-[40vh] mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-hover/20 backdrop-blur-sm" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-5xl font-bold mb-4">About Native Andhra</h1>
              <p className="text-xl text-gray-300">Your Trusted Partner in Financial Services</p>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  {stat.icon}
                  <h3 className="text-2xl font-bold mt-2">{stat.number}</h3>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div {...fadeIn} className="space-y-6">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-300">
                Since our establishment, Native Andhra has been at the forefront of providing comprehensive financial and documentation services in Visakhapatnam. Our journey began with a simple mission: to make financial services accessible and hassle-free for everyone.
              </p>
              <p className="text-gray-300">
                Today, we've grown into a trusted name in the industry, serving thousands of satisfied clients and expanding our services to meet the evolving needs of our community.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="space-y-6">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <div className="space-y-4">
                {[
                  { icon: <Clock className="w-6 h-6 text-primary" />, title: "Quick Processing", desc: "Fast and efficient service delivery" },
                  { icon: <Shield className="w-6 h-6 text-primary" />, title: "Security", desc: "Your data safety is our priority" },
                  { icon: <Users className="w-6 h-6 text-primary" />, title: "Customer First", desc: "Client satisfaction is our goal" }
                ].map((value, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-4 bg-card rounded-lg"
                  >
                    {value.icon}
                    <div>
                      <h3 className="font-semibold">{value.title}</h3>
                      <p className="text-gray-400">{value.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-6 bg-card rounded-lg">
                <MapPin className="w-8 h-8 text-primary mb-4" />
                <p className="text-gray-300">D-No 46-13-35/1, Dondaparthy, Visakhapatnam</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-6 bg-card rounded-lg">
                <Phone className="w-8 h-8 text-primary mb-4" />
                <p className="text-gray-300">+91 81258 88827</p>
                <p className="text-gray-300">+91 95331 12277</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-6 bg-card rounded-lg">
                <Mail className="w-8 h-8 text-primary mb-4" />
                <p className="text-gray-300">idoonlineap@gmail.com</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;