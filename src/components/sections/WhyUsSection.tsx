"use client";

import {
  CheckCircle2,
  Lightbulb,
  Users,
  MessageCircle,
  Award,
  Heart,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function WhyUsSection() {
  const benefits = [
    {
      icon: Lightbulb,
      title: "Concepts Made Simple",
      description: "We break down every topic so you really understand it",
    },
    {
      icon: CheckCircle2,
      title: "Practical Insights",
      description: "Learn how CFA topics apply in real finance jobs",
    },
    {
      icon: Users,
      title: "Personal Attention",
      description: "Small batch size means every student gets individual focus",
    },
    {
      icon: MessageCircle,
      title: "1-on-1 Mentorship",
      description: "Regular doubt-solving and guidance sessions",
    },
    {
      icon: Award,
      title: "Scholarship Essay Help",
      description: "We'll guide you in writing your CFA scholarship essay",
    },
    {
      icon: Heart,
      title: "Friendly Environment",
      description: "Learn, discuss, and grow together with like-minded aspirants",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why You&apos;ll Love <span className="text-primary">Learning With Us</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We&apos;re committed to your success every step of the way
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 mx-auto max-w-3xl text-center">
          <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-8">
            <p className="text-lg font-medium text-foreground">
              At LevelUp, we believe in quality education with personal attention. 
              Our small batches ensure every student receives the mentorship they deserve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
