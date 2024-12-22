import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";

const DocumentServices = () => {
  const services = [
    {
      title: "PAN Card Services",
      description: "Quick PAN card application, corrections, and duplicates with doorstep service",
      link: "/services/pan-card"
    },
    {
      title: "Passport Services",
      description: "Complete assistance for passport application, renewal, and other related services",
      link: "/services/passport"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {services.map((service, index) => (
        <div key={index} className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300">
          <FileText className="w-8 h-8 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-muted-foreground mb-4">{service.description}</p>
          <Link 
            to={service.link}
            className="inline-flex items-center text-primary hover:text-primary/80 group"
          >
            Learn More 
            <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DocumentServices;