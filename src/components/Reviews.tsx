import { Star, User } from 'lucide-react';

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

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our <span className="text-primary">Clients Say</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{review.comment}"</p>
                <h4 className="font-semibold">{review.name}</h4>
                <p className="text-sm text-muted-foreground">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;