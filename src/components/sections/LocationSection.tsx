"use client";

import { MapPin, Train, Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function LocationSection() {
  return (
    <section id="location" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Where <span className="text-primary">We Are</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Conveniently located in Kalyan (West)
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          <Card className="border-l-4 border-l-primary">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Our Location</h3>
                  <p className="text-sm text-muted-foreground">
                    Kalyan (West), Mumbai
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Train className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Easy to Reach</h3>
                  <p className="text-sm text-muted-foreground">
                    Nearby Kalyan Railway Station - convenient commute for students
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 mx-auto max-w-3xl">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Navigation className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Visit Us</h3>
              <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                Our classes are based in Kalyan (West), making it easy for students 
                from Kalyan, Dombivli, Thane, and surrounding areas to attend.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
