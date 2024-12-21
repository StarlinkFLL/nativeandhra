import Navigation from "@/components/Navigation";
import ServiceDetail from "@/components/services/licence/ServiceDetail";

const Documentation = () => {
  return (
    <>
      <Navigation />
      <ServiceDetail
        title="Documentation Services"
        description="Complete documentation support for all your driving license related needs. We handle document verification, preparation, and submission to ensure a smooth processing experience."
        requirements={[
          "Identity proof documents",
          "Address proof documents",
          "Age proof documents",
          "Existing license (if applicable)",
          "Passport size photographs",
          "Medical certificates (if required)"
        ]}
        process={[
          "Initial document review",
          "Document verification",
          "Digital copy preparation",
          "Attestation services",
          "Application form filling",
          "Submission and tracking"
        ]}
        timeline="Documentation processing typically takes 2-3 working days, depending on the complexity and type of documents required."
      />
    </>
  );
};

export default Documentation;