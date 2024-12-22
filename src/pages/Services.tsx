import Navigation from "@/components/Navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoanServices from "@/components/services/categories/LoanServices";
import InsuranceServices from "@/components/services/categories/InsuranceServices";
import DocumentServices from "@/components/services/categories/DocumentServices";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-24 container mx-auto px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Complete assistance for all your financial and documentation needs with professional expertise
          </p>
        </motion.div>

        <Tabs defaultValue="loans" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="loans">Loans</TabsTrigger>
            <TabsTrigger value="rto">RTO Works</TabsTrigger>
            <TabsTrigger value="insurance">Insurance</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="rentals">Car Rentals</TabsTrigger>
          </TabsList>

          <TabsContent value="loans" className="mt-6">
            <LoanServices />
          </TabsContent>

          <TabsContent value="insurance" className="mt-6">
            <InsuranceServices />
          </TabsContent>

          <TabsContent value="documents" className="mt-6">
            <DocumentServices />
          </TabsContent>

          <TabsContent value="rto" className="mt-6">
            <div className="grid gap-6">
              <div className="bg-card p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">RTO Services</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <Link to="/services/driving-licence" className="hover:text-primary transition-colors">
                    Driving License Services
                  </Link>
                  <Link to="/services/registration" className="hover:text-primary transition-colors">
                    Registration Services
                  </Link>
                  <Link to="/services/permits" className="hover:text-primary transition-colors">
                    Permit Services
                  </Link>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="rentals" className="mt-6">
            <div className="bg-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Car Rental Services</h2>
              <Link 
                to="/services/car-rentals"
                className="inline-flex items-center text-primary hover:text-primary/80 group"
              >
                View Available Cars
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold mb-6">Need Assistance?</h2>
          <p className="text-gray-300 mb-8">Contact us for any service related queries</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+918125888827" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90"
            >
              Call: +91 8125888827
            </a>
            <a 
              href="tel:+919533112277" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90"
            >
              Call: +91 9533112277
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;