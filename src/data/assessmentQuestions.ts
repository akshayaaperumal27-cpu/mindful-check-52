export interface Question {
  id: number;
  text: string;
  category: 'stress' | 'anxiety' | 'mood' | 'sleep' | 'energy';
}

export interface AnswerOption {
  value: number;
  label: string;
  description: string;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Over the past two weeks, how often have you felt overwhelmed by your daily responsibilities?",
    category: 'stress',
  },
  {
    id: 2,
    text: "How often have you experienced difficulty falling asleep or staying asleep?",
    category: 'sleep',
  },
  {
    id: 3,
    text: "How frequently have you felt nervous, anxious, or on edge?",
    category: 'anxiety',
  },
  {
    id: 4,
    text: "How often have you felt a lack of energy or motivation to do things you usually enjoy?",
    category: 'energy',
  },
  {
    id: 5,
    text: "How frequently have you found it hard to stop or control worrying?",
    category: 'anxiety',
  },
  {
    id: 6,
    text: "How often have you felt down, sad, or hopeless?",
    category: 'mood',
  },
  {
    id: 7,
    text: "How frequently have you experienced physical symptoms like headaches, muscle tension, or stomach issues due to stress?",
    category: 'stress',
  },
];

export const answerOptions: AnswerOption[] = [
  { value: 0, label: "Not at all", description: "This hasn't been an issue for me" },
  { value: 1, label: "Several days", description: "A few times over the period" },
  { value: 2, label: "More than half the days", description: "Quite frequently" },
  { value: 3, label: "Nearly every day", description: "Almost constant" },
];

export interface ScoreRange {
  min: number;
  max: number;
  level: 'minimal' | 'mild' | 'moderate' | 'significant';
  title: string;
  message: string;
  color: string;
  suggestions: string[];
}

export const scoreRanges: ScoreRange[] = [
  {
    min: 0,
    max: 5,
    level: 'minimal',
    title: "You're doing well",
    message: "Based on your responses, you appear to be managing your mental wellness effectively. Continue nurturing your well-being with healthy habits.",
    color: 'text-primary',
    suggestions: [
      "Maintain your current self-care routines",
      "Practice gratitude daily",
      "Stay connected with loved ones",
      "Continue regular physical activity",
    ],
  },
  {
    min: 6,
    max: 10,
    level: 'mild',
    title: "Mild stress indicators",
    message: "Your responses suggest you may be experiencing some mild stress or anxiety. This is common and manageable with proper self-care.",
    color: 'text-calm-blue',
    suggestions: [
      "Try deep breathing exercises for 5 minutes daily",
      "Consider starting a mindfulness practice",
      "Ensure you're getting adequate sleep (7-9 hours)",
      "Take short breaks during your day",
    ],
  },
  {
    min: 11,
    max: 15,
    level: 'moderate',
    title: "Moderate stress indicators",
    message: "Your responses indicate moderate levels of stress or anxiety. It may be helpful to focus on stress management techniques and consider speaking with someone you trust.",
    color: 'text-calm-coral',
    suggestions: [
      "Establish a regular relaxation routine",
      "Talk to a trusted friend or family member",
      "Limit caffeine and alcohol intake",
      "Consider guided meditation apps",
      "Set boundaries with work and personal commitments",
    ],
  },
  {
    min: 16,
    max: 21,
    level: 'significant',
    title: "Consider seeking support",
    message: "Your responses suggest you may be experiencing significant stress or anxiety. We encourage you to reach out to a mental health professional who can provide personalized support.",
    color: 'text-destructive',
    suggestions: [
      "Speak with a healthcare provider or counselor",
      "Reach out to a mental health helpline",
      "Share how you're feeling with someone you trust",
      "Prioritize rest and basic self-care",
      "Remember: seeking help is a sign of strength",
    ],
  },
];

export const getScoreRange = (score: number): ScoreRange => {
  return scoreRanges.find(range => score >= range.min && score <= range.max) || scoreRanges[0];
};
