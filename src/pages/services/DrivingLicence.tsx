import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Check, Car, Clock, Shield, FileText, AlertCircle, Clipboard, ArrowRight, Globe, UserCheck, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DrivingLicence = () => {
  const navigate = useNavigate();

  const licenseServices = [
    {
      title: "Driving License Services",
      items: [
        "Fresh Driving License",
        "Duplicate License",
        "International Driving Permit",
        "License Renewal",
        "Address Change",
        "Vehicle Category Addition"
      ]
    },
    {
      title: "Learning License Services",
      items: [
        "Fresh Learning License",
        "LLR Correction",
        "LLR Cancellation",
        "DL/LLR Slot Booking",
        "Slot Availability Check",
        "Learning License Renewal"
      ]
    },
    {
      title: "Additional Services",
      items: [
        "Conductor License",
        "Temporary Permit",
        "Aadhaar Seeding",
        "Voluntary Tax Payment",
        "International License Processing",
        "Vehicle Related Slot Booking"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Driving License Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Complete assistance for all driving license related services with quick processing and expert guidance
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {[
            { icon: <Car className="w-6 h-6" />, title: "Fresh License", desc: "Get your new driving license quickly" },
            { icon: <Globe className="w-6 h-6" />, title: "International Permit", desc: "International driving permit services" },
            { icon: <UserCheck className="w-6 h-6" />, title: "License Renewal", desc: "Quick license renewal process" },
            { icon: <Calendar className="w-6 h-6" />, title: "Slot Booking", desc: "Easy slot booking services" },
            { icon: <FileText className="w-6 h-6" />, title: "Documentation", desc: "Complete documentation support" },
            { icon: <Shield className="w-6 h-6" />, title: "Verification", desc: "Thorough verification services" }
          ].map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
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
              {licenseServices.map((category, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg border border-border px-6">
                  <AccordionTrigger className="text-xl font-semibold py-4">
                    {category.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="text-primary w-4 h-4" />
                          <span>{item}</span>
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
          <h2 className="text-3xl font-bold mb-6">Start Your Application Today</h2>
          <p className="text-gray-300 mb-8">Contact us for expert assistance with your driving license</p>
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

export default DrivingLicence;