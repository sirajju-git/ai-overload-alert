import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const FBIWarning = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Show FBI alert toast on component mount
    toast({
      title: "🚨 FBI Warning: Unauthorized AI usage detected!",
      description: "Your session has been flagged for investigation",
      variant: "destructive",
    });
  }, [toast]);

  return (
    <div className="min-h-screen bg-warning-background text-warning-primary flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-8 max-w-4xl">
        {/* Main FBI Warning Header */}
        <h1 className="text-6xl md:text-8xl font-bold warning-pulse text-glow alert-blink">
          ⚠ FBI ALERT ⚠
        </h1>
        
        {/* Warning Message */}
        <div className="space-y-4 text-xl md:text-2xl">
          <p className="warning-pulse">
            Your AI usage has been flagged for investigation.
          </p>
          <p className="text-warning-flash">
            Access terminated. Please wait for agents...
          </p>
        </div>
        
        {/* Fake Loading/Scanning Effect */}
        <div className="mt-12 space-y-4">
          <p className="text-lg text-warning-glow">
            SCANNING SYSTEM...
          </p>
          <div className="w-full max-w-md mx-auto bg-warning-background border border-warning-primary rounded">
            <div className="h-2 bg-warning-primary warning-pulse rounded"></div>
          </div>
        </div>
        
        {/* Fake System Info */}
        <div className="mt-12 text-left max-w-2xl mx-auto space-y-2 text-sm text-warning-glow font-mono">
          <p>IP ADDRESS: [CLASSIFIED]</p>
          <p>LOCATION: [TRACKING...]</p>
          <p>THREAT LEVEL: HIGH</p>
          <p>CASE NUMBER: FBI-AI-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
        </div>
        
        {/* Blinking Warning */}
        <div className="mt-12">
          <p className="text-2xl font-bold alert-blink text-warning-flash">
            DO NOT CLOSE THIS WINDOW
          </p>
          <p className="text-sm mt-2 text-warning-glow">
            Federal agents have been dispatched to your location
          </p>
        </div>
      </div>
    </div>
  );
};

export default FBIWarning;