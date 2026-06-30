import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { WhyChoose } from "@/components/WhyChoose";
import { TemplateCategories } from "@/components/TemplateCategories";
import { BusinessShowcase } from "@/components/BusinessShowcase";
import { PersonalShowcase } from "@/components/PersonalShowcase";
import { PoliticalShowcase } from "@/components/PoliticalShowcase";
import { CustomFooterFeature } from "@/components/CustomFooterFeature";
import { HowItWorks } from "@/components/HowItWorks";
import { Statistics } from "@/components/Statistics";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { DownloadSection } from "@/components/DownloadSection";
import { Footer } from "@/components/Footer";
import { MobileStickyButton } from "@/components/ui/MobileStickyButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-x-hidden">
      <Navbar />
      <div className="w-full">
        {/* Section 1 */}
        <Hero />
        
        {/* Section 2 */}
        <AboutSection />
        
        {/* Section 3 */}
        <WhyChoose />
        
        {/* Section 4 */}
        <TemplateCategories />
        
        {/* Showcases Wrap */}
        <div id="showcases">
          {/* Section 5 */}
          <BusinessShowcase />
          
          {/* Section 6 */}
          <PersonalShowcase />
          
          {/* Section 7 */}
          <PoliticalShowcase />
        </div>
        
        {/* Section 8 */}
        <CustomFooterFeature />
        
        {/* Section 10 */}
        <HowItWorks />
        
        {/* Section 11 */}
        <Statistics />
        
        {/* Section 12 */}
        <Testimonials />
        
        {/* Section 13 */}
        <FAQ />
        
        {/* Section 14 */}
        <DownloadSection />
      </div>
      {/* Section 15 */}
      <Footer />
      <MobileStickyButton />
    </main>
  );
}
