"use client";

import { TrendingUp, Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center space-y-6 sm:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-lg font-semibold text-primary">
            <TrendingUp className="h-4 w-4" />
            CFA Level 1 Classes Starting Soon
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <span className="block text-foreground">LevelUp</span>
            <span className="block text-primary">Finance Institute</span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
            Your First Step Toward a Global Finance Career!
          </p>

          {/* Key Info Cards */}
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-3 mx-auto max-w-3xl mt-8 sm:mt-12">
            <div className="rounded-lg border bg-card p-3 sm:p-4 text-center">
              <Calendar className="h-5 w-5 sm:h-6 sm:w-6 mx-auto mb-2 text-primary" />
              <p className="text-lg sm:text-sm font-semibold">Batch Starts</p>
              <p className="text-lg  font-semibold text-primary">Mid-December 2025</p>
            </div>
            <div className="rounded-lg border bg-card p-3 sm:p-4 text-center">
              <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 mx-auto mb-2 text-primary" />
              <p className="text-lg sm:text-sm font-semibold">Target Exams</p>
              <p className="text-lg text-primary font-semibold">Aug & Nov 2026</p>
            </div>
            <div className="rounded-lg border bg-card p-3 sm:p-4 text-center">
              <MapPin className="h-5 w-5 sm:h-6 sm:w-6 mx-auto mb-2 text-primary" />
              <p className="text-lg sm:text-sm font-semibold">Location</p>
              <p className="text-lg text-primary font-semibold">Kalyan (West)</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-8 sm:mt-12">
            <Button size="lg" onClick={scrollToContact} className="group w-full sm:w-auto">
              Enroll Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => {
              const element = document.getElementById("about");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }} className="w-full sm:w-auto">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
    </section>
  );
}
