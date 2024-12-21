import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Copyright from "@/components/Copyright";

interface ServiceDetailProps {
  title: string;
  description: string;
  requirements: string[];
  process: string[];
  timeline: string;
}

const ServiceDetail = ({ title, description, requirements, process, timeline }: ServiceDetailProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pt-32 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4"
      >
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-primary hover:text-primary-hover transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </button>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl font-bold mb-6"
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert max-w-none mb-8"
        >
          <p className="text-lg">{description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
            <ul className="space-y-2">
              {requirements.map((req, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center text-gray-300"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  {req}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Process</h2>
            <ul className="space-y-2">
              {process.map((step, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center text-gray-300"
                >
                  <span className="w-6 h-6 bg-primary/20 rounded-full mr-3 flex items-center justify-center text-primary">
                    {index + 1}
                  </span>
                  {step}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-card p-6 rounded-lg mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4">Timeline</h2>
          <p className="text-gray-300">{timeline}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors"
          >
            Contact Us for Assistance
          </Link>
        </motion.div>
      </motion.div>
      <Copyright />
    </div>
  );
};

export default ServiceDetail;