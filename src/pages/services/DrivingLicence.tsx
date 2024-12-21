import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import LicenceHero from "@/components/services/licence/LicenceHero";
import LicenceFeatures from "@/components/services/licence/LicenceFeatures";
import LicenceServices from "@/components/services/licence/LicenceServices";
import Copyright from "@/components/Copyright";

const DrivingLicence = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-32 md:pt-40 container mx-auto px-4 pb-16"
      >
        <LicenceHero />
        <LicenceFeatures />
        <LicenceServices />

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

        <Copyright />
      </motion.div>
    </div>
  );
};

export default DrivingLicence;