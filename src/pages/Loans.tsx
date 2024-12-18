import Navigation from "@/components/Navigation";

const Loans = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-24 container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Loan Services</h1>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Car Loans</h2>
            <ul className="space-y-2">
              <li>• Competitive interest rates</li>
              <li>• Quick approval process</li>
              <li>• Flexible repayment options</li>
              <li>• Minimal documentation</li>
            </ul>
          </div>
          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Home Loans</h2>
            <ul className="space-y-2">
              <li>• Attractive interest rates</li>
              <li>• Long repayment tenure</li>
              <li>• Property consultation</li>
              <li>• Easy documentation</li>
            </ul>
          </div>
          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Business Loans</h2>
            <ul className="space-y-2">
              <li>• Quick business loans</li>
              <li>• Collateral-free options</li>
              <li>• Flexible terms</li>
              <li>• Fast processing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loans;