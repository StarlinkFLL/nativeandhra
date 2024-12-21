import { motion } from "framer-motion";

const LicenceHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent animate-fade-up">
        Driving License Services
      </h1>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-up delay-100">
        Complete assistance for all driving license related services with quick processing and expert guidance
      </p>
    </motion.div>
  );
};

export default LicenceHero;