export interface AnswerData {
  answerId: number;
  content: string;
  userName: string;
  created: Date;
}

export interface QuestionData {
  questionId: number;
  title: string;
  content: string;
  userName: string;
  created: Date;
  answers: AnswerData[];
}

const questions: QuestionData[] = [
  {
    questionId: 1,
    title: 'Why should I learn TypeScript?',
    content: 'TypeScript seems to be getting popular...',
    userName: 'Bob',
    created: new Date(),
    answers: [
      {
        answerId: 1,
        content: 'To create better software',
        userName: 'Jane',
        created: new Date(),
      },
      {
        answerId: 2,
        content: 'To find bugs at the compile time not in the runtime',
        userName: 'Fred',
        created: new Date(),
      },
    ],
  },
  {
    questionId: 2,
    title: 'Why should I learn SQL?',
    content: 'There are databases right?',
    userName: 'Jane',
    created: new Date(),
    answers: [],
  },
  {
    questionId: 3,
    title: 'Which framework is better React or Angular',
    content: 'What to choose for a new project',
    userName: 'Bob',
    created: new Date(),
    answers: [],
  },
];

export const getUnansweredQuestions = (): QuestionData[] => {
  return questions.filter((q) => q.answers.length === 0);
};
