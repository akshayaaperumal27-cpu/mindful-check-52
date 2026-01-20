import { Button } from "@/components/ui/button";
import { Heart, Shield, Sparkles } from "lucide-react";

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="flex flex-col items-center text-center animate-fade-in">
      <div className="mb-8 relative">
        <div className="w-24 h-24 rounded-full bg-sage-light flex items-center justify-center animate-float">
          <Heart className="w-12 h-12 text-primary" />
        </div>
        <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-calm-coral animate-pulse-gentle" />
      </div>

      <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
        Mental Wellness Check-In
      </h1>
      
      <p className="text-lg text-muted-foreground max-w-md mb-8 text-balance">
        Take a few moments to reflect on how you've been feeling. This simple assessment can help you understand your current mental wellness.
      </p>

      <div className="bg-card rounded-2xl p-6 shadow-card mb-8 max-w-lg w-full">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
            <Shield className="w-5 h-5 text-secondary-foreground" />
          </div>
          <div className="text-left">
            <h3 className="font-heading font-semibold text-foreground mb-1">
              Important Notice
            </h3>
            <p className="text-sm text-muted-foreground">
              This tool is for educational purposes only and is <strong>not a substitute for professional medical advice, diagnosis, or treatment</strong>. If you're in crisis or need immediate help, please contact a mental health professional or crisis helpline.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Button variant="calm" size="xl" onClick={onStart}>
          Begin Assessment
        </Button>
        <p className="text-sm text-muted-foreground">Takes about 2-3 minutes</p>
      </div>

      <div className="mt-12 flex gap-8 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <span>7 questions</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <span>Completely private</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <span>No account needed</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
