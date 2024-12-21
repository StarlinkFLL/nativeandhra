import Navigation from "@/components/Navigation";
import ServiceDetail from "@/components/services/licence/ServiceDetail";

const SlotBooking = () => {
  return (
    <>
      <Navigation />
      <ServiceDetail
        title="Slot Booking Services"
        description="Book your driving test slots efficiently with our streamlined slot booking service. We help you choose convenient time slots and ensure all prerequisites are met before the test."
        requirements={[
          "Valid Learning License",
          "Proof of identity",
          "Test fee payment receipt",
          "Vehicle arrangement details",
          "Form 5 application",
          "Practice completion certificate (if applicable)"
        ]}
        process={[
          "Slot availability check",
          "Preferred time slot selection",
          "Fee payment processing",
          "Slot confirmation",
          "Reminder service setup",
          "Test preparation guidance"
        ]}
        timeline="Slot booking can be done instantly based on availability. We recommend booking at least 7 days in advance for preferred time slots."
      />
    </>
  );
};

export default SlotBooking;