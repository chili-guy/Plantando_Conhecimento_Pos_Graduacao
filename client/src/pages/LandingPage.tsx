import { Hero } from "@/components/landing/Hero";
import { 
  ProblemSection, 
  SolutionSection, 
  WhatIsSection, 
  UniqueSection, 
  ModulesSection, 
  TimelineSection, 
  PartnersSection, 
  TestimonialsSection, 
  GuaranteeSection 
} from "@/components/landing/ContentSections";
import { InvestmentSection } from "@/components/landing/Investment";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30 text-foreground overflow-x-hidden">
      <Hero />
      <PartnersSection />
      <ProblemSection />
      <SolutionSection />
      <WhatIsSection />
      <UniqueSection />
      <ModulesSection />
      <TimelineSection />
      <TestimonialsSection />
      <InvestmentSection />
      <GuaranteeSection />
      <Footer />
    </div>
  );
}
