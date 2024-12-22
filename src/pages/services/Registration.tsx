import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Check, Clock, Shield, AlertCircle, Car, Clipboard, ArrowRight, Building2, FileKey2, FileSearch } from "lucide-react";
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {registrationServices.map((category, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg border border-border px-6">
                <AccordionTrigger className="text-xl font-semibold py-4">
                  {category.title}
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center justify-between p-2 hover:bg-primary/10 rounded-lg transition-colors">
                        <div className="flex items-center gap-2">
                          <Check className="text-primary w-4 h-4" />
                          <span>{item.name}</span>
                        </div>
                        <Link 
                          to={item.link}
                          className="flex items-center text-primary hover:text-primary/80 transition-colors"
                        >
                          Learn More
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <h2 className="text-3xl font-bold mb-6">Need Assistance?</h2>
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