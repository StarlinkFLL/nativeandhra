import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Check, FileText, Clock, Shield, AlertCircle, Car, Clipboard, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  const services = [
    { title: "New Vehicle Registration", icon: <Car className="w-6 h-6" />, desc: "Complete registration process for new vehicles" },
    { title: "Ownership Transfer", icon: <FileText className="w-6 h-6" />, desc: "Hassle-free ownership transfer services" },
    { title: "RC Renewal", icon: <Clock className="w-6 h-6" />, desc: "Quick RC renewal process" },
    { title: "NOC Services", icon: <Shield className="w-6 h-6" />, desc: "Efficient NOC processing" },
    { title: "Address Change", icon: <Clipboard className="w-6 h-6" />, desc: "Update your vehicle registration address" },
    { title: "Duplicate RC", icon: <FileText className="w-6 h-6" />, desc: "Get duplicate registration certificate" }
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
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Vehicle Registration Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional assistance for all your vehicle registration needs with quick processing and complete documentation support
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
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

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Document Submission", desc: "Submit required documents" },
              { step: "2", title: "Verification", desc: "Document verification process" },
              { step: "3", title: "Processing", desc: "Application processing" },
              { step: "4", title: "Completion", desc: "Registration completion" }
            ].map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="relative text-center"
              >
                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 text-primary" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Requirements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Required Documents</h2>
          <div className="max-w-3xl mx-auto bg-card p-8 rounded-lg">
            <ul className="space-y-4">
              {[
                "Valid ID Proof",
                "Address Proof",
                "Insurance Certificate",
                "Sale Certificate/Invoice",
                "PUC Certificate",
                "Passport Size Photos"
              ].map((doc, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <Check className="text-primary" />
                  <span>{doc}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* CTA Section */}
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
              className="bg-primary hover:bg-primary-hover text-white"
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