import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Workflows  from "../components/Workflows";
import AccountabilityAudit from "@/components/AccountabilityAudit";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#F7FFF7]">
      {/* 1. Navbar sits on top (Fixed) */}
      <Navbar />

      {/* 2. Hero Section takes up the full screen below */}
      <Hero />
      
      {/* 3. You can add more sections here later (e.g., Features, Pricing) */}
      <Workflows />
      <AccountabilityAudit />
      <Pricing />
      <Footer />
    </main>
  );
}