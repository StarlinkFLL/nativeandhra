import ServiceDetail from "@/components/services/licence/ServiceDetail";

const NOCServices = () => {
  return (
    <ServiceDetail
      title="NOC Services"
      description="Complete assistance in obtaining No Objection Certificate (NOC) from RTO for interstate vehicle transfer or other purposes. We handle all documentation and follow-ups."
      requirements={[
        "Original RC",
        "Valid insurance policy",
        "PUC certificate",
        "Address proof",
        "Identity proof",
        "Tax clearance certificate",
        "Application form for NOC",
        "Photographs of the vehicle"
      ]}
      process={[
        "Initial document verification",
        "Application preparation",
        "Submission at RTO",
        "Police verification clearance",
        "NOC collection and delivery"
      ]}
      timeline="Processing typically takes 7-10 working days after document submission"
    />
  );
};

export default NOCServices;