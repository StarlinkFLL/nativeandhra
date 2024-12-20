import { Star, User } from 'lucide-react';
import { motion } from 'framer-motion';

const Reviews = () => {
  const reviews = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      comment: "Excellent service for car loans. Got approved quickly with minimal documentation.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Customer",
      comment: "Very professional team for RTO works. Made the process smooth and hassle-free.",
      rating: 5
    },
    {
      name: "Suresh Reddy",
      role: "Customer",
      comment: "Best insurance services in Visakhapatnam. Highly recommended!",
      rating: 4
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black via-background to-black">
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="container mx-auto px-4"
      >
        <motion.h2 
          variants={item}
          className="text-4xl font-bold text-center mb-12"
        >
          What Our <span className="text-primary">Clients Say</span>
        </motion.h2>
        
        <motion.div 
          variants={container}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4"
                >
                  <User className="w-8 h-8 text-primary" />
                </motion.div>
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{review.comment}"</p>
                <h4 className="font-semibold">{review.name}</h4>
                <p className="text-sm text-muted-foreground">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Reviews;