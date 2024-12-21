import { motion } from "framer-motion";
import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const licenseServices = [
  {
    title: "Driving License Services",
    items: [
      { name: "Fresh Driving License", desc: "Get your new driving license with our expert assistance and quick processing" },
      { name: "Duplicate License", desc: "Lost your license? We'll help you get a duplicate copy quickly" },
      { name: "International Driving Permit", desc: "Planning to drive abroad? Get your international permit hassle-free" },
      { name: "License Renewal", desc: "Renew your expired license with our efficient service" },
      { name: "Address Change", desc: "Update your license with your new address" },
      { name: "Vehicle Category Addition", desc: "Add new vehicle categories to your existing license" }
    ]
  },
  {
    title: "Learning License Services",
    items: [
      { name: "Fresh Learning License", desc: "Start your driving journey with a new learning license" },
      { name: "LLR Correction", desc: "Fix any errors in your learning license details" },
      { name: "LLR Cancellation", desc: "Cancel your learning license if needed" },
      { name: "DL/LLR Slot Booking", desc: "Book your test slots conveniently" },
      { name: "Slot Availability Check", desc: "Check real-time slot availability" },
      { name: "Learning License Renewal", desc: "Extend your learning period with quick renewal" }
    ]
  },
  {
    title: "Additional Services",
    items: [
      { name: "Conductor License", desc: "Get your professional conductor license" },
      { name: "Temporary Permit", desc: "Quick temporary driving permits" },
      { name: "Aadhaar Seeding", desc: "Link your Aadhaar with your license" },
      { name: "Voluntary Tax Payment", desc: "Easy tax payment services" },
      { name: "International License Processing", desc: "Complete assistance for international licenses" },
      { name: "Vehicle Related Slot Booking", desc: "Book slots for vehicle-related services" }
    ]
  }
];

const LicenceServices = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
        Our Services
      </h2>
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {licenseServices.map((category, index) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index }}
              key={index}
            >
              <AccordionItem value={`item-${index}`} className="bg-card rounded-lg border border-border px-6 hover:border-primary/50 transition-all duration-300">
                <AccordionTrigger className="text-xl font-semibold py-4">
                  {category.title}
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex flex-col gap-2 p-4 rounded-lg bg-black/20 hover:bg-black/40 transition-all duration-300"
                      >
                        <div className="flex items-center gap-2">
                          <Check className="text-primary w-4 h-4 flex-shrink-0" />
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <p className="text-sm text-gray-400 ml-6">{item.desc}</p>
                      </motion.li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </motion.div>
  );
};

export default LicenceServices;