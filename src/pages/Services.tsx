import Navigation from "@/components/Navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-24 container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
        <Tabs defaultValue="rto" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="rto">RTO Works</TabsTrigger>
            <TabsTrigger value="loans">Loans</TabsTrigger>
            <TabsTrigger value="insurance">Insurance</TabsTrigger>
            <TabsTrigger value="registration">Registration</TabsTrigger>
            <TabsTrigger value="permits">Permits</TabsTrigger>
            <TabsTrigger value="other">Other Services</TabsTrigger>
          </TabsList>

          <TabsContent value="rto" className="mt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Driving License Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/driving-licence" className="hover:text-primary transition-colors">
                      Fresh Driving License
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/international-permit" className="hover:text-primary transition-colors">
                      International Driving Permit
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/conductor-licence" className="hover:text-primary transition-colors">
                      Conductor License
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/slot-booking" className="hover:text-primary transition-colors">
                      DL/LLR Slot Booking
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/learners-licence" className="hover:text-primary transition-colors">
                      Learner's License
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Documentation Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/aadhaar-seeding" className="hover:text-primary transition-colors">
                      Aadhaar Seeding
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/temporary-permit" className="hover:text-primary transition-colors">
                      Temporary Permit
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/voluntary-tax" className="hover:text-primary transition-colors">
                      Voluntary Tax Payment
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/hsrp" className="hover:text-primary transition-colors">
                      HSRP
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Additional Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/fitness" className="hover:text-primary transition-colors">
                      Fitness Certificate
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/body-builder" className="hover:text-primary transition-colors">
                      Body Builder
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/llr-correction" className="hover:text-primary transition-colors">
                      LLR Correction
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/llr-cancellation" className="hover:text-primary transition-colors">
                      LLR Cancellation
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="loans" className="mt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Vehicle Loans</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/car-loans" className="hover:text-primary transition-colors">
                      Car Loans
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Business & Personal</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/business-loans" className="hover:text-primary transition-colors">
                      Business Loans
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/personal-loans" className="hover:text-primary transition-colors">
                      Personal Loans
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Property Loans</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/home-loans" className="hover:text-primary transition-colors">
                      Home Loans
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/mortgage-loans" className="hover:text-primary transition-colors">
                      Mortgage Loans
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="insurance" className="mt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Vehicle Insurance</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/insurance/two-wheeler" className="hover:text-primary transition-colors">
                      Bike / Two Wheeler
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/insurance/four-wheeler" className="hover:text-primary transition-colors">
                      Car / Four Wheeler
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Life Insurance</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/insurance/life" className="hover:text-primary transition-colors">
                      LIC / Term Insurance
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="registration" className="mt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Basic Registration</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/registration/alteration" className="hover:text-primary transition-colors">
                      Alteration of Vehicle
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/registration/cancellation" className="hover:text-primary transition-colors">
                      Cancellation of RC
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/registration/duplicate" className="hover:text-primary transition-colors">
                      Duplicate RC
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/registration/renewal" className="hover:text-primary transition-colors">
                      RC Renewal
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Transfer & NOC</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/registration/transfer" className="hover:text-primary transition-colors">
                      Transfer of Ownership
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/registration/noc" className="hover:text-primary transition-colors">
                      Issue of NOC
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/registration/noc-cancel" className="hover:text-primary transition-colors">
                      Cancellation of NOC
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Other Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/registration/hire-purchase" className="hover:text-primary transition-colors">
                      Hire Purchase Agreement
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/registration/reassignment" className="hover:text-primary transition-colors">
                      Reassignment of Vehicles
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/registration/theft" className="hover:text-primary transition-colors">
                      Theft Intimation
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="permits" className="mt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">New Permits</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/permits/new" className="hover:text-primary transition-colors">
                      New Permit
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/permits/bilateral" className="hover:text-primary transition-colors">
                      Bilateral Tax
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Permit Management</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/permits/renewal" className="hover:text-primary transition-colors">
                      Renewal of Permit
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/permits/transfer" className="hover:text-primary transition-colors">
                      Transfer of Permit
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/permits/variation" className="hover:text-primary transition-colors">
                      Variation of Permit
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Additional Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/permits/surrender" className="hover:text-primary transition-colors">
                      Surrender of Permit
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/permits/replacement" className="hover:text-primary transition-colors">
                      Replacement of Vehicle
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/permits/auth-card" className="hover:text-primary transition-colors">
                      Renewal of Auth Card
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="other" className="mt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Documentation</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/pan-card" className="hover:text-primary transition-colors">
                      PAN Card Services
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/passport" className="hover:text-primary transition-colors">
                      Passport Services
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Vehicle Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    <Link to="/services/car-rentals" className="hover:text-primary transition-colors">
                      Car Rentals
                    </Link>
                  </li>
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