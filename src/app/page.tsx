import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Festivals } from "@/components/sections/Festivals";
import { InfluencerCorner } from "@/components/sections/InfluencerCorner";
import { QRFeature } from "@/components/sections/QRFeature";
import { Experience } from "@/components/sections/Experience";
import { ProcessFeatures } from "@/components/sections/ProcessFeatures";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { Stats } from "@/components/sections/Stats";
import { Industries } from "@/components/sections/Industries";
import { MediaAwards } from "@/components/sections/MediaAwards";
import { Blog } from "@/components/sections/Blog";
import {
  TrustedCTA,
  SupportCTA,
  DownloadCTA,
} from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Industries />
        <Festivals />
        <InfluencerCorner />
        <QRFeature />
        <Experience />
        <ProcessFeatures />
        <Testimonials />
        <Pricing />
        <Stats />
        <MediaAwards />
        <Blog />
        <TrustedCTA />
        <SupportCTA />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
