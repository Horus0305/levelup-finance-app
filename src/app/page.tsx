import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { MentorsSection } from "@/components/sections/MentorsSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <MentorsSection />
      <WhyUsSection />
      <LocationSection />
      <ContactSection />
    </main>
  );
}
