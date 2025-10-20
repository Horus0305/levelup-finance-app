import {
  HeroSection,
  AboutSection,
  MentorsSection,
  WhyUsSection,
  LocationSection,
  ContactSection,
} from "@/components/sections/LandingPage";

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
