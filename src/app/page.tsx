import {
  HeroSection,
  AboutSection,
  MentorsSection,
  WhyUsSection,
  DemoLecturesSection,
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
      <DemoLecturesSection />
      <LocationSection />
      <ContactSection />
    </main>
  );
}
