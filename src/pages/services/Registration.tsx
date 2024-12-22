import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Check, FileText, Clock, Shield, AlertCircle, Car, Clipboard, ArrowRight, Building2, FileKey2, FileSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Registration = () => {
  const navigate = useNavigate();

  const registrationServices = [
    {
      title: "Vehicle Registration",
      items: [
        { name: "New Vehicle Registration", link: "/services/registration/vehicle" },
        { name: "Transfer of Ownership", link: "/services/registration/transfer" },
        { name: "RC Renewal", link: "/services/registration/renewal" },
        { name: "NOC Services", link: "/services/registration/noc" }
      ]
    },
    {
      title: "Documentation Services",
      items: [
        { name: "Address Change", link: "/services/registration/vehicle" },
        { name: "Duplicate RC", link: "/services/registration/vehicle" },
        { name: "HP Addition/Termination", link: "/services/registration/vehicle" },
        { name: "Other State Transfer", link: "/services/registration/transfer" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-24 container mx-auto px-4 pb-16"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Registration Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Complete assistance for all vehicle registration and documentation services with professional expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {[
            { icon: <Car className="w-6 h-6" />, title: "Vehicle Registration", desc: "Complete registration process for all types of vehicles", link: "/services/registration/vehicle" },
            { icon: <FileText className="w-6 h-6" />, title: "Transfer of Ownership", desc: "Comprehensive ownership transfer services", link: "/services/registration/transfer" },
            { icon: <Shield className="w-6 h-6" />, title: "RC Renewal", desc: "Quick and efficient RC renewal process", link: "/services/registration/renewal" },
            { icon: <Building2 className="w-6 h-6" />, title: "NOC Services", desc: "Hassle-free NOC processing", link: "/services/registration/noc" },
            { icon: <FileKey2 className="w-6 h-6" />, title: "Documentation", desc: "Complete documentation assistance", link: "/services/registration/vehicle" },
            { icon: <FileSearch className="w-6 h-6" />, title: "Verification", desc: "Thorough verification services", link: "/services/registration/vehicle" }
          ].map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.desc}</p>
              <Link to={service.link} className="inline-flex items-center text-primary hover:text-primary/80">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {registrationServices.map((category, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg border border-border px-6">
                  <AccordionTrigger className="text-xl font-semibold py-4">
                    {category.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="text-primary w-4 h-4" />
                          <Link to={item.link} className="hover:text-primary transition-colors">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8">Contact us now for quick and efficient registration services</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
            <a href="tel:+918125888827" className="inline-flex items-center justify-center">
              <Button size="lg" variant="outline">
                Call: +91 8125888827
              </Button>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Registration;