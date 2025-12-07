import { Calendar, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function BatchInfo() {
  return (
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
            <p className="text-sm text-muted-foreground">3rd January 2026</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Target Exam Dates:</p>
            <p className="text-sm text-muted-foreground">Nov 2026 & Feb 2027</p>
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
  );
}
