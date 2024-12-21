import Navigation from "@/components/Navigation";
import ServiceDetail from "@/components/services/licence/ServiceDetail";

const LicenceRenewal = () => {
  return (
    <>
      <Navigation />
      <ServiceDetail
        title="License Renewal"
        description="Renew your driving license before it expires with our hassle-free renewal service. We ensure quick processing and timely delivery of your renewed license with minimal effort from your side."
        requirements={[
          "Original driving license",
          "Updated address proof",
          "Recent passport size photographs",
          "Identity proof",
          "Medical certificate (if age is above 40)",
          "Form 9 application"
        ]}
        process={[
          "Document verification and preparation",
          "Online application submission",
          "Fee payment processing",
          "Medical test (if applicable)",
          "Biometric verification",
          "Collection of renewed license"
        ]}
        timeline="Renewal process typically takes 7-10 working days. We recommend initiating the process at least 30 days before license expiry."
      />
    </>
  );
};

export default LicenceRenewal;