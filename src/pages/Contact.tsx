import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-32 md:pt-40 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent animate-fade-up">
            Contact Us
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto animate-fade-up delay-100">
            Get in touch with us for any queries or assistance with our services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                <Input id="name" placeholder="Your name" className="bg-card/50 border-border/50" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">Email</label>
                <Input id="email" type="email" placeholder="Your email" className="bg-card/50 border-border/50" />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm">Phone</label>
                <Input id="phone" type="tel" placeholder="Your phone number" className="bg-card/50 border-border/50" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  className="min-h-[120px] bg-card/50 border-border/50" 
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary-hover transition-colors duration-300">
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl mb-3 text-primary">Address</h3>
                <p className="text-gray-300">123 Business Street, City, State, PIN</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl mb-3 text-primary">Phone</h3>
                <p className="text-gray-300">+91 8125888827</p>
                <p className="text-gray-300">+91 9533112277</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl mb-3 text-primary">Email</h3>
                <p className="text-gray-300">idoonlineap@gmail.com</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl mb-3 text-primary">Business Hours</h3>
                <p className="text-gray-300">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-300">Sunday: Closed</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-gray-400 text-sm mt-16 pb-8"
        >
          © {new Date().getFullYear()} Native Andhra. All rights reserved.
        </motion.footer>
      </div>
    </div>
  );
};

export default Contact;