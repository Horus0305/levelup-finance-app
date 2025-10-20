"use client";

import { GraduationCap, Target, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            Welcome to <span className="text-primary">LevelUp</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Dreaming of becoming a CFA charterholder? You&apos;re in the right place!
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8 sm:mb-12">
          <Card className="border-t-4 border-t-primary">
            <CardContent className="pt-6 text-center space-y-3">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Mentorship</h3>
              <p className="text-sm text-muted-foreground">
                We don&apos;t just teach — we mentor and guide you
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-primary">
            <CardContent className="pt-6 text-center space-y-3">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Strong Concepts</h3>
              <p className="text-sm text-muted-foreground">
                Build deep understanding of finance fundamentals
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-primary">
            <CardContent className="pt-6 text-center space-y-3">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Real-World Skills</h3>
              <p className="text-sm text-muted-foreground">
                Practical insights from industry professionals
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-primary">
            <CardContent className="pt-6 text-center space-y-3">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Exam Success</h3>
              <p className="text-sm text-muted-foreground">
                Confidence to clear every CFA level
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mx-auto max-w-3xl text-center space-y-4 sm:space-y-6">
          <p className="text-sm sm:text-base text-muted-foreground">
            At LevelUp, our goal is simple: help you build strong concepts, real-world 
            understanding, and the confidence to clear every CFA level.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground">
            We&apos;re starting with <span className="font-semibold text-primary">CFA Level 1 </span> 
            this 
            December and will soon launch <span className="font-semibold text-primary">Level 2</span> classes as well.
          </p>
        </div>
      </div>
    </section>
  );
}
