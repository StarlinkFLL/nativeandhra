import Navigation from "@/components/Navigation";

const Insurance = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-24 container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Insurance Services</h1>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Vehicle Insurance</h2>
            <ul className="space-y-2">
              <li>• Car Insurance</li>
              <li>• Bike Insurance</li>
              <li>• Commercial Vehicle</li>
              <li>• Claim Assistance</li>
            </ul>
          </div>
          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Life Insurance</h2>
            <ul className="space-y-2">
              <li>• Term Insurance</li>
              <li>• Endowment Plans</li>
              <li>• ULIP</li>
              <li>• Child Plans</li>
            </ul>
          </div>
          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Health Insurance</h2>
            <ul className="space-y-2">
              <li>• Individual Health</li>
              <li>• Family Floater</li>
              <li>• Critical Illness</li>
              <li>• Senior Citizen Plans</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insurance;