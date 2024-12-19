import Navigation from "@/components/Navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-24 container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
        <Tabs defaultValue="loans" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="loans">Loans</TabsTrigger>
            <TabsTrigger value="rto">RTO Works</TabsTrigger>
            <TabsTrigger value="insurance">Insurance</TabsTrigger>
            <TabsTrigger value="other">Other Services</TabsTrigger>
          </TabsList>

          <TabsContent value="loans" className="mt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Car Loans</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />Up to ₹2.5 crore</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />100% financing</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />Quick approval</li>
                </ul>
                <Link to="/services/car-loans" className="text-primary hover:underline mt-4 block">Learn More</Link>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Business Loans</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />Up to ₹20 lakh</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />24-hour approval</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />Minimal documentation</li>
                </ul>
                <Link to="/services/business-loans" className="text-primary hover:underline mt-4 block">Learn More</Link>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Home Loans</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />Up to ₹3.5 crore</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />PMAY benefits</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />Flexible tenor</li>
                </ul>
                <Link to="/services/home-loans" className="text-primary hover:underline mt-4 block">Learn More</Link>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Personal Loans</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />Up to ₹50 lakh</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />Quick processing</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />No collateral</li>
                </ul>
                <Link to="/services/personal-loans" className="text-primary hover:underline mt-4 block">Learn More</Link>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Mortgage Loans</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />High-value loans</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />Flexible tenor</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />Quick disbursal</li>
                </ul>
                <Link to="/services/mortgage-loans" className="text-primary hover:underline mt-4 block">Learn More</Link>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="rto" className="mt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Driving License</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />Fresh License</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />License Renewal</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />International Permit</li>
                </ul>
                <Link to="/services/driving-licence" className="text-primary hover:underline mt-4 block">Learn More</Link>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Registration Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />New Registration</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />RC Transfer</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />NOC Services</li>
                </ul>
                <Link to="/services/registration" className="text-primary hover:underline mt-4 block">Learn More</Link>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Permit Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />New Permits</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />Permit Renewal</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />Vehicle Transfer</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="insurance" className="mt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Vehicle Insurance</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />Two Wheeler</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />Four Wheeler</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />Commercial</li>
                </ul>
                <Link to="/insurance" className="text-primary hover:underline mt-4 block">Learn More</Link>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Life Insurance</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />Term Insurance</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />ULIP Plans</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />Child Plans</li>
                </ul>
                <Link to="/insurance" className="text-primary hover:underline mt-4 block">Learn More</Link>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Health Insurance</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />Individual Plans</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />Family Floater</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />Critical Illness</li>
                </ul>
                <Link to="/insurance" className="text-primary hover:underline mt-4 block">Learn More</Link>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="other" className="mt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Car Rentals</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />Multiple Brands</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />Flexible Duration</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />24/7 Support</li>
                </ul>
                <Link to="/services/car-rentals" className="text-primary hover:underline mt-4 block">Learn More</Link>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">PAN Card</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />New Application</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />Corrections</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />Duplicate Card</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Passport Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />New Passport</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />Renewal</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" />Emergency Services</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Need Assistance?</h2>
          <p className="mb-6">Contact us for any service related queries</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+918125888827" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90">
              Call: +91 8125888827
            </a>
            <a href="tel:+919533112277" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90">
              Call: +91 9533112277
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;