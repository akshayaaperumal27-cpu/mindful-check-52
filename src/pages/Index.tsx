import { useState } from "react";
import WelcomeScreen from "@/components/assessment/WelcomeScreen";
import ProgressBar from "@/components/assessment/ProgressBar";
import QuestionCard from "@/components/assessment/QuestionCard";
import ResultsScreen from "@/components/assessment/ResultsScreen";
import { questions } from "@/data/assessmentQuestions";
import { Leaf } from "lucide-react";

type AssessmentStep = "welcome" | "questions" | "results";

const Index = () => {
  const [step, setStep] = useState<AssessmentStep>("welcome");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const handleStart = () => {
    setStep("questions");
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const handleAnswer = (value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questions[currentQuestionIndex].id]: value,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setStep("results");
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const calculateScore = () => {
    return Object.values(answers).reduce((sum, value) => sum + value, 0);
  };

  const maxScore = questions.length * 3; // Max 3 points per question

  return (
    <div className="min-h-screen gradient-serene">
      {/* Header */}
      <header className="py-6 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2">
          <Leaf className="w-6 h-6 text-primary" />
          <span className="font-heading font-semibold text-foreground">MindCheck</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          {step === "welcome" && <WelcomeScreen onStart={handleStart} />}

          {step === "questions" && (
            <>
              <ProgressBar
                current={currentQuestionIndex + 1}
                total={questions.length}
              />
              <QuestionCard
                question={questions[currentQuestionIndex]}
                currentAnswer={answers[questions[currentQuestionIndex].id] ?? null}
                onAnswer={handleAnswer}
                onNext={handleNext}
                onPrevious={handlePrevious}
                isFirst={currentQuestionIndex === 0}
                isLast={currentQuestionIndex === questions.length - 1}
              />
            </>
          )}

          {step === "results" && (
            <ResultsScreen
              score={calculateScore()}
              maxScore={maxScore}
              onRestart={handleStart}
            />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 text-center">
        <p className="text-sm text-muted-foreground">
          Created with care • Your data stays private and is never stored
        </p>
      </footer>
    </div>
  );
};

export default Index;
