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
        { name: "Fresh Driving License", desc: "Get your new driving license with our expert assistance and quick processing" },
        { name: "Duplicate License", desc: "Lost your license? We'll help you get a duplicate copy quickly" },
        { name: "International Driving Permit", desc: "Planning to drive abroad? Get your international permit hassle-free" },
        { name: "License Renewal", desc: "Renew your expired license with our efficient service" },
        { name: "Address Change", desc: "Update your license with your new address" },
        { name: "Vehicle Category Addition", desc: "Add new vehicle categories to your existing license" }
      ]
    },
    {
      title: "Learning License Services",
      items: [
        { name: "Fresh Learning License", desc: "Start your driving journey with a new learning license" },
        { name: "LLR Correction", desc: "Fix any errors in your learning license details" },
        { name: "LLR Cancellation", desc: "Cancel your learning license if needed" },
        { name: "DL/LLR Slot Booking", desc: "Book your test slots conveniently" },
        { name: "Slot Availability Check", desc: "Check real-time slot availability" },
        { name: "Learning License Renewal", desc: "Extend your learning period with quick renewal" }
      ]
    },
    {
      title: "Additional Services",
      items: [
        { name: "Conductor License", desc: "Get your professional conductor license" },
        { name: "Temporary Permit", desc: "Quick temporary driving permits" },
        { name: "Aadhaar Seeding", desc: "Link your Aadhaar with your license" },
        { name: "Voluntary Tax Payment", desc: "Easy tax payment services" },
        { name: "International License Processing", desc: "Complete assistance for international licenses" },
        { name: "Vehicle Related Slot Booking", desc: "Book slots for vehicle-related services" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
        className="pt-32 md:pt-40 container mx-auto px-4 pb-16"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent animate-fade-up">
            Driving License Services
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-up delay-100">
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
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="text-primary mb-4 animate-bounce">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {licenseServices.map((category, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * index }}
                  key={index}
                >
                  <AccordionItem value={`item-${index}`} className="bg-card rounded-lg border border-border px-6 hover:border-primary/50 transition-all duration-300">
                    <AccordionTrigger className="text-xl font-semibold py-4">
                      {category.title}
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {category.items.map((item, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 * idx }}
                            className="flex flex-col gap-2 p-4 rounded-lg bg-black/20 hover:bg-black/40 transition-all duration-300"
                          >
                            <div className="flex items-center gap-2">
                              <Check className="text-primary w-4 h-4 flex-shrink-0" />
                              <span className="font-medium">{item.name}</span>
                            </div>
                            <p className="text-sm text-gray-400 ml-6">{item.desc}</p>
                          </motion.li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Start Your Application Today
          </h2>
          <p className="text-gray-300 mb-8">Contact us for expert assistance with your driving license</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="tel:+918125888827" className="inline-flex items-center justify-center w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Call: +91 8125888827
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>

        <div className="text-center text-gray-400 text-sm mt-16">
          © {new Date().getFullYear()} Native Andhra. All rights reserved.
        </div>
      </motion.div>
    </div>
  );
};

export default DrivingLicence;