import ServiceDetail from "@/components/services/licence/ServiceDetail";

const RCRenewal = () => {
  return (
    <ServiceDetail
      title="RC Renewal"
      description="Professional assistance for renewing your vehicle's registration certificate before or after expiry. We ensure timely renewal with all necessary documentation and procedures."
      requirements={[
        "Original RC",
        "Valid insurance policy",
        "PUC certificate",
        "Address proof",
        "Identity proof",
        "Fitness certificate (for commercial vehicles)",
        "Tax payment receipts",
        "Recent photographs"
      ]}
      process={[
        "Document verification",
        "Application submission",
        "Fee payment",
        "Fitness test (if required)",
        "Updated RC delivery"
      ]}
      timeline="Standard processing time is 5-7 working days for private vehicles"
    />
  );
};

export default RCRenewal;