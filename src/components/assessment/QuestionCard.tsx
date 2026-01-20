import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Question, answerOptions } from "@/data/assessmentQuestions";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  currentAnswer: number | null;
  onAnswer: (value: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const QuestionCard = ({
  question,
  currentAnswer,
  onAnswer,
  onNext,
  onPrevious,
  isFirst,
  isLast,
}: QuestionCardProps) => {
  const [selectedValue, setSelectedValue] = useState<number | null>(currentAnswer);

  const handleSelect = (value: number) => {
    setSelectedValue(value);
    onAnswer(value);
  };

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in" key={question.id}>
      <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card">
        <div className="mb-2">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-sage-light text-sage-dark capitalize">
            {question.category}
          </span>
        </div>
        
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-8 text-balance">
          {question.text}
        </h2>

        <div className="space-y-3">
          {answerOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`w-full p-4 rounded-xl text-left transition-all duration-300 border-2 ${
                selectedValue === option.value
                  ? "border-primary bg-sage-light shadow-soft"
                  : "border-border bg-background hover:border-primary/30 hover:bg-muted"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    selectedValue === option.value
                      ? "border-primary bg-primary"
                      : "border-muted-foreground"
                  }`}
                >
                  {selectedValue === option.value && (
                    <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                  )}
                </div>
                <div>
                  <div className="font-medium text-foreground">{option.label}</div>
                  <div className="text-sm text-muted-foreground">{option.description}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <Button
          variant="warm"
          onClick={onPrevious}
          disabled={isFirst}
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Previous
        </Button>

        <Button
          variant="calm"
          onClick={onNext}
          disabled={selectedValue === null}
          className="gap-2"
        >
          {isLast ? "See Results" : "Next"}
          {!isLast && <ArrowRight className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  );
};

export default QuestionCard;
