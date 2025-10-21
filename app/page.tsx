'use client';

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectDetails from "@/components/ProjectDetails";
import Tokenomics from "@/components/Tokenomics";
import SupportedNetworks from "@/components/SupportedNetworks";
import Socials from "@/components/Socials";
import HowToParticipate from "@/components/HowToParticipate";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <ProjectDetails />
      <Tokenomics />
      <SupportedNetworks />
      <Socials />
      <HowToParticipate />
      <Footer />
    </div>
  );
}