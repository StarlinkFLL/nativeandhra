import Navigation from "@/components/Navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-24 container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
        <Tabs defaultValue="rto" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="rto">RTO Works</TabsTrigger>
            <TabsTrigger value="loans">Loans</TabsTrigger>
            <TabsTrigger value="insurance">Insurance</TabsTrigger>
          </TabsList>
          <TabsContent value="rto" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Driving License</h3>
                <p>Complete assistance for new licenses and renewals</p>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Vehicle Registration</h3>
                <p>Hassle-free registration and transfer services</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="loans" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Car Loans</h3>
                <p>Competitive interest rates and flexible repayment options</p>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Home Loans</h3>
                <p>Make your dream home a reality with our home loan services</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="insurance" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Vehicle Insurance</h3>
                <p>Comprehensive coverage for cars and bikes</p>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Term Insurance</h3>
                <p>Secure your family's future with our term insurance plans</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Services;