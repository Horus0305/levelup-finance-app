"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, TrendingUp } from "lucide-react";

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-fade-in">
            <GraduationCap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">CFA Level 1 Coaching</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
            Level Up Your{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Finance Career
            </span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-in-up delay-200">
            Master the CFA Level 1 exam with personalized mentorship from industry experts. 
            Small batches, focused learning, and proven results.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 py-4 animate-fade-in-up delay-300">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">90%+</div>
              <div className="text-sm text-muted-foreground">Pass Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1:10</div>
              <div className="text-sm text-muted-foreground">Mentor Ratio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Success Stories</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
            <Button size="lg" onClick={scrollToContact} className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToContact}>
              <TrendingUp className="mr-2 h-4 w-4" />
              Learn More
            </Button>
          </div>

          {/* Batch Starting Notice */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent/10 border border-accent/20 animate-fade-in-up delay-500">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            <span className="text-sm font-medium">
              Next Batch Starting: <span className="text-accent">Mid-December 2025</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
