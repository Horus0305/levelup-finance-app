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
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <TrendingUp className="h-4 w-4" />
            CFA Level 1 Classes Starting Soon
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-foreground">LevelUp</span>
            <span className="block text-primary">Finance Institute</span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Your First Step Toward a Global Finance Career!
          </p>

          {/* Key Info Cards */}
          <div className="grid gap-4 sm:grid-cols-3 mx-auto max-w-3xl mt-12">
            <div className="rounded-lg border bg-card p-4 text-center">
              <Calendar className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="text-sm font-medium">Batch Starts</p>
              <p className="text-xs text-muted-foreground">Mid-December 2025</p>
            </div>
            <div className="rounded-lg border bg-card p-4 text-center">
              <TrendingUp className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="text-sm font-medium">Target Exams</p>
              <p className="text-xs text-muted-foreground">Aug & Nov 2026</p>
            </div>
            <div className="rounded-lg border bg-card p-4 text-center">
              <MapPin className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="text-sm font-medium">Location</p>
              <p className="text-xs text-muted-foreground">Kalyan (West)</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button size="lg" onClick={scrollToContact} className="group">
              Enroll Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => {
              const element = document.getElementById("about");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}>
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
