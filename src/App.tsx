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
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;