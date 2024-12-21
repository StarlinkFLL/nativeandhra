import Navigation from "@/components/Navigation";
import ServiceDetail from "@/components/services/licence/ServiceDetail";

const Verification = () => {
  return (
    <>
      <Navigation />
      <ServiceDetail
        title="License Verification Services"
        description="Comprehensive verification services for driving licenses, including authenticity checks, status verification, and validation of international permits."
        requirements={[
          "Original driving license",
          "Identity proof",
          "Address proof",
          "Application for verification",
          "Authorization letter (if applying on behalf)",
          "Previous verification reports (if any)"
        ]}
        process={[
          "Document submission",
          "Initial verification check",
          "RTO database verification",
          "Status report generation",
          "Verification certificate issuance",
          "Digital copy provision"
        ]}
        timeline="Standard verification process takes 3-5 working days. Express verification available in 24-48 hours for urgent requirements."
      />
    </>
  );
};

export default Verification;