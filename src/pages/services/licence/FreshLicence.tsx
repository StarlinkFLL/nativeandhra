import Navigation from "@/components/Navigation";
import ServiceDetail from "@/components/services/licence/ServiceDetail";

const FreshLicence = () => {
  return (
    <>
      <Navigation />
      <ServiceDetail
        title="Fresh Driving License"
        description="Get your new driving license quickly and efficiently with our comprehensive assistance. We guide you through the entire process, from documentation to test preparation, ensuring a smooth experience."
        requirements={[
          "Age proof (must be 18 years or above)",
          "Address proof (Aadhaar card, voter ID, etc.)",
          "Passport size photographs",
          "Medical certificate (Form 1A)",
          "Learning License (valid)",
          "Identity proof"
        ]}
        process={[
          "Initial consultation and document verification",
          "Application form filling and submission",
          "Scheduling the driving test",
          "Test preparation guidance",
          "Assistance during the driving test",
          "License collection and verification"
        ]}
        timeline="The entire process typically takes 15-20 working days from application to license delivery. This includes the mandatory 30-day waiting period after obtaining the Learning License."
      />
    </>
  );
};

export default FreshLicence;