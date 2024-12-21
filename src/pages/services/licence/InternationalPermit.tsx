import Navigation from "@/components/Navigation";
import ServiceDetail from "@/components/services/licence/ServiceDetail";

const InternationalPermit = () => {
  return (
    <>
      <Navigation />
      <ServiceDetail
        title="International Driving Permit"
        description="Obtain your International Driving Permit (IDP) for driving abroad. Our service ensures proper documentation and quick processing for a valid international permit recognized in multiple countries."
        requirements={[
          "Valid Indian driving license",
          "Passport with minimum 6 months validity",
          "Visa copy (if available)",
          "Passport size photographs",
          "Address proof",
          "Form 4-A application"
        ]}
        process={[
          "Verification of existing license",
          "Document preparation and validation",
          "Application form submission",
          "Fee payment processing",
          "IDP processing and verification",
          "Permit collection"
        ]}
        timeline="International Driving Permit is typically issued within 3-5 working days after document submission."
      />
    </>
  );
};

export default InternationalPermit;