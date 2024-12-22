import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Loans from "./pages/Loans";
import RtoWorks from "./pages/RtoWorks";
import Insurance from "./pages/Insurance";
import Contact from "./pages/Contact";
import CarLoans from "./pages/services/CarLoans";
import PersonalLoans from "./pages/services/PersonalLoans";
import BusinessLoans from "./pages/services/BusinessLoans";
import HomeLoans from "./pages/services/HomeLoans";
import MortgageLoans from "./pages/services/MortgageLoans";
import Registration from "./pages/services/Registration";
import DrivingLicence from "./pages/services/DrivingLicence";
import CarRentals from "./pages/services/CarRentals";
import FreshLicence from "./pages/services/licence/FreshLicence";
import LicenceRenewal from "./pages/services/licence/LicenceRenewal";
import InternationalPermit from "./pages/services/licence/InternationalPermit";
import SlotBooking from "./pages/services/licence/SlotBooking";
import Documentation from "./pages/services/licence/Documentation";
import Verification from "./pages/services/licence/Verification";
import VehicleRegistration from "./pages/services/registration/VehicleRegistration";
import OwnershipTransfer from "./pages/services/registration/OwnershipTransfer";
import RCRenewal from "./pages/services/registration/RCRenewal";
import NOCServices from "./pages/services/registration/NOCServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/rto" element={<RtoWorks />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/car-loans" element={<CarLoans />} />
          <Route path="/services/personal-loans" element={<PersonalLoans />} />
          <Route path="/services/business-loans" element={<BusinessLoans />} />
          <Route path="/services/home-loans" element={<HomeLoans />} />
          <Route path="/services/mortgage-loans" element={<MortgageLoans />} />
          <Route path="/services/registration" element={<Registration />} />
          <Route path="/services/driving-licence" element={<DrivingLicence />} />
          <Route path="/services/car-rentals" element={<CarRentals />} />
          <Route path="/services/driving-licence/fresh" element={<FreshLicence />} />
          <Route path="/services/driving-licence/renewal" element={<LicenceRenewal />} />
          <Route path="/services/driving-licence/international" element={<InternationalPermit />} />
          <Route path="/services/driving-licence/slot-booking" element={<SlotBooking />} />
          <Route path="/services/driving-licence/documentation" element={<Documentation />} />
          <Route path="/services/driving-licence/verification" element={<Verification />} />
          <Route path="/services/registration/vehicle" element={<VehicleRegistration />} />
          <Route path="/services/registration/transfer" element={<OwnershipTransfer />} />
          <Route path="/services/registration/renewal" element={<RCRenewal />} />
          <Route path="/services/registration/noc" element={<NOCServices />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;