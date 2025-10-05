"use client";

import { Calendar, Target, Mail, Phone, User, MessageSquare, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - you can integrate with your backend here
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We will contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to <span className="text-primary">Level Up?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join LevelUp Finance Institute and kickstart your CFA journey with mentors who truly care
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
          {/* Course Details */}
          <div className="space-y-6">
            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Batch Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Batch Starts:</p>
                  <p className="text-sm text-muted-foreground">Mid-December 2025</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Target Exam Dates:</p>
                  <p className="text-sm text-muted-foreground">August / November 2026</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Level:</p>
                  <p className="text-sm text-muted-foreground">CFA Level 1 (Level 2 coming soon)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Our Goal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Let&apos;s build your career in finance — step by step, level by level! 
                  Our mission is to provide quality education with personal attention to 
                  help you achieve your CFA dreams.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border rounded-md bg-background"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border rounded-md bg-background"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border rounded-md bg-background"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 border rounded-md bg-background min-h-[100px]"
                    placeholder="Any questions or special requirements?"
                  />
                </div>

                <Button type="submit" className="w-full group">
                  <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  Submit Enquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
