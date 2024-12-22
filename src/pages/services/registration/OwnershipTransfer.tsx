import ServiceDetail from "@/components/services/licence/ServiceDetail";

const OwnershipTransfer = () => {
  return (
    <ServiceDetail
      title="Transfer of Ownership"
      description="Comprehensive assistance for transferring vehicle ownership, ensuring all legal requirements are met and documentation is properly handled for a smooth ownership transition."
      requirements={[
        "Original Registration Certificate (RC)",
        "Valid insurance policy",
        "PAN Card and Aadhar Card of both parties",
        "NOC from financier (if applicable)",
        "Form 28, 29, and 30",
        "Sale deed or transfer deed",
        "Address proof of both parties",
        "Pollution Under Control (PUC) certificate"
      ]}
      process={[
        "Document collection from both parties",
        "NOC verification and processing",
        "Application submission at RTO",
        "Payment of transfer fees",
        "RC update and delivery"
      ]}
      timeline="Processing typically takes 10-15 working days depending on RTO jurisdiction"
    />
  );
};

export default OwnershipTransfer;