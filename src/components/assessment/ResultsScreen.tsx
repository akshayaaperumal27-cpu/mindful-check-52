import { Button } from "@/components/ui/button";
import { getScoreRange } from "@/data/assessmentQuestions";
import { RefreshCw, Heart, Phone, ExternalLink, Lightbulb } from "lucide-react";

interface ResultsScreenProps {
  score: number;
  maxScore: number;
  onRestart: () => void;
}

const ResultsScreen = ({ score, maxScore, onRestart }: ResultsScreenProps) => {
  const result = getScoreRange(score);
  const percentage = Math.round((score / maxScore) * 100);

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sage-light mb-4">
          <Heart className="w-10 h-10 text-primary" />
        </div>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
          Your Results
        </h1>
        <p className="text-muted-foreground">
          Based on your responses over the past two weeks
        </p>
      </div>

      {/* Score Card */}
      <div className="bg-card rounded-3xl p-8 shadow-card mb-6">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
          <div className="relative w-32 h-32">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="currentColor"
                strokeWidth="12"
                fill="none"
                className="text-muted"
              />
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="currentColor"
                strokeWidth="12"
                fill="none"
                strokeDasharray={`${percentage * 3.52} 352`}
                strokeLinecap="round"
                className="text-primary transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-foreground">{score}</span>
              <span className="text-sm text-muted-foreground">of {maxScore}</span>
            </div>
          </div>

          <div className="text-center md:text-left flex-1">
            <h2 className={`font-heading text-2xl font-bold mb-2 ${result.color}`}>
              {result.title}
            </h2>
            <p className="text-muted-foreground">{result.message}</p>
          </div>
        </div>

        {/* Suggestions */}
        <div className="border-t border-border pt-6">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-calm-coral" />
            <h3 className="font-heading font-semibold text-foreground">
              Suggestions for You
            </h3>
          </div>
          <ul className="space-y-3">
            {result.suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-muted-foreground animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Resources Card */}
      <div className="bg-secondary rounded-2xl p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Phone className="w-5 h-5 text-secondary-foreground" />
          <h3 className="font-heading font-semibold text-secondary-foreground">
            Helpful Resources
          </h3>
        </div>
        <div className="space-y-3">
          <a
            href="https://988lifeline.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 bg-card rounded-xl hover:shadow-soft transition-all group"
          >
            <div>
              <p className="font-medium text-foreground">988 Suicide & Crisis Lifeline</p>
              <p className="text-sm text-muted-foreground">Call or text 988 (US)</p>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://www.crisistextline.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 bg-card rounded-xl hover:shadow-soft transition-all group"
          >
            <div>
              <p className="font-medium text-foreground">Crisis Text Line</p>
              <p className="text-sm text-muted-foreground">Text HOME to 741741</p>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-warm-cream rounded-2xl p-6 mb-8">
        <p className="text-sm text-muted-foreground text-center">
          <strong>Reminder:</strong> This assessment is not a diagnostic tool and does not replace professional evaluation. 
          If you're concerned about your mental health, please consult with a qualified healthcare provider.
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button variant="calm" size="lg" onClick={onRestart} className="gap-2">
          <RefreshCw className="w-4 h-4" />
          Take Assessment Again
        </Button>
      </div>
    </div>
  );
};

export default ResultsScreen;
