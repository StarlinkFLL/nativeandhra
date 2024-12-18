import Navigation from "@/components/Navigation";

const RtoWorks = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-24 container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">RTO Works</h1>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">License Services</h2>
            <ul className="space-y-2">
              <li>• New Driving License</li>
              <li>• License Renewal</li>
              <li>• International License</li>
              <li>• Duplicate License</li>
            </ul>
          </div>
          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Vehicle Registration</h2>
            <ul className="space-y-2">
              <li>• New Registration</li>
              <li>• Transfer of Ownership</li>
              <li>• RC Renewal</li>
              <li>• NOC Services</li>
            </ul>
          </div>
          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Other Services</h2>
            <ul className="space-y-2">
              <li>• Permit Services</li>
              <li>• Fitness Certificate</li>
              <li>• Address Change</li>
              <li>• Vehicle Insurance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RtoWorks;