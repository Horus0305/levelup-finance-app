"use client";

import { TrendingUp, Building2, BookOpen, LineChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MentorsSection() {
  return (
    <section id="mentors" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Meet Your <span className="text-primary">Mentors</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Learn from experienced professionals who are passionate about your success
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Sarang Borse */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Sarang Borse</CardTitle>
                    <p className="text-sm text-muted-foreground">CFA Level 3 Candidate</p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <BookOpen className="h-4 w-4" />
                <span>Equity Research Specialist</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sarang makes finance come alive! With solid hands-on experience in equity 
                research, financial modelling, and a deep understanding of the banking & 
                finance sector, he connects CFA theory with real-world market trends.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                He loves discussing macroeconomics, geopolitics, and how global events move 
                the markets — making learning truly engaging and practical.
              </p>
            </CardContent>
          </Card>

          {/* Abhishek Pawar */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-br from-accent/10 to-accent/5">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <LineChart className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Abhishek Pawar</CardTitle>
                    <p className="text-sm text-muted-foreground">Chartered Accountant</p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-accent">
                <Building2 className="h-4 w-4" />
                <span>Finance Professional at JSW</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Abhishek brings the corporate world right into the classroom. With strong 
                experience in accounting, taxation, reporting, and corporate governance, 
                he ensures you understand how numbers tell a company&apos;s real story.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                His teaching style is clear, relatable, and focused on helping students 
                connect accounting theory to real-life business situations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
