import { motion } from "framer-motion";
import { Car, Globe, UserCheck, Calendar, FileText, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { 
    icon: <Car className="w-6 h-6" />, 
    title: "Fresh License", 
    desc: "Get your new driving license quickly",
    link: "/services/driving-licence/fresh"
  },
  { 
    icon: <Globe className="w-6 h-6" />, 
    title: "International Permit", 
    desc: "International driving permit services",
    link: "/services/driving-licence/international"
  },
  { 
    icon: <UserCheck className="w-6 h-6" />, 
    title: "License Renewal", 
    desc: "Quick license renewal process",
    link: "/services/driving-licence/renewal"
  },
  { 
    icon: <Calendar className="w-6 h-6" />, 
    title: "Slot Booking", 
    desc: "Easy slot booking services",
    link: "/services/driving-licence/slot-booking"
  },
  { 
    icon: <FileText className="w-6 h-6" />, 
    title: "Documentation", 
    desc: "Complete documentation support",
    link: "/services/driving-licence/documentation"
  },
  { 
    icon: <Shield className="w-6 h-6" />, 
    title: "Verification", 
    desc: "Thorough verification services",
    link: "/services/driving-licence/verification"
  }
];

const LicenceFeatures = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 }
        }
      }}
      initial="hidden"
      animate="visible"
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
    >
      {features.map((service, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex flex-col"
        >
          <div className="text-primary mb-4 animate-bounce">{service.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-400 mb-4 flex-grow">{service.desc}</p>
          <Link 
            to={service.link}
            className="inline-flex items-center text-primary hover:text-primary-hover transition-colors group mt-2"
          >
            Learn More 
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default LicenceFeatures;