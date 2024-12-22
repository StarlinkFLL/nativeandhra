import ServiceDetail from "@/components/services/licence/ServiceDetail";

const VehicleRegistration = () => {
  return (
    <ServiceDetail
      title="Vehicle Registration"
      description="Complete assistance for new vehicle registration, including all necessary documentation and RTO processes. We handle everything from initial paperwork to final registration certificate delivery."
      requirements={[
        "Original invoice of the vehicle",
        "Valid insurance policy",
        "PAN Card and Aadhar Card",
        "Address proof (Utility bill/Rental agreement)",
        "Form 20 (Sale certificate)",
        "Form 21 (Sale certificate from dealer)",
        "Form 22 (Road worthiness certificate)",
        "Temporary registration certificate"
      ]}
      process={[
        "Document verification and submission",
        "Payment of registration fees and road tax",
        "Vehicle inspection at RTO",
        "Registration number allocation",
        "RC smart card delivery"
      ]}
      timeline="Standard processing time is 7-10 working days from document submission"
    />
  );
};

export default VehicleRegistration;