import { http } from './http';

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

export interface QuestionDataFromServer {
  questionId: number;
  title: string;
  content: string;
  userName: string;
  created: string;
  answers: Array<{
    answerId: number;
    content: string;
    userName: string;
    created: string;
  }>;
}

export const mapQuestionFromServer = (
  question: QuestionDataFromServer,
): QuestionData => ({
  ...question,
  created: new Date(question.created),
  answers: question.answers
    ? question.answers.map((answer) => ({
        ...answer,
        created: new Date(answer.created),
      }))
    : [],
});

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

const wait = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getQuestion = async (
  questionId: number,
): Promise<QuestionData | null> => {
  await wait(500);
  const results = questions.filter((q) => q.questionId === questionId);
  return results.length === 0 ? null : results[0];
};

export const getUnansweredQuestions = async (): Promise<QuestionData[]> => {
  const result = await http<QuestionDataFromServer[]>({
    path: '/questions/unanswered',
  });
  if (result.ok && result.body) {
    return result.body.map(mapQuestionFromServer);
  } else {
    return [];
  }
};

export const searchQuestions = async (
  criteria: string,
): Promise<QuestionData[]> => {
  await wait(500);
  return questions.filter(
    (q) =>
      q.title.toLowerCase().indexOf(criteria.toLowerCase()) >= 0 ||
      q.content.toLowerCase().indexOf(criteria.toLowerCase()) >= 0,
  );
};

export interface PostQuestionData {
  title: string;
  content: string;
  userName: string;
  created: Date;
}

export const postQuestion = async (
  question: PostQuestionData,
): Promise<QuestionData | undefined> => {
  await wait(500);
  const questionId = Math.max(...questions.map((q) => q.questionId)) + 1;
  const newQuestion: QuestionData = {
    ...question,
    questionId,
    answers: [],
  };
  questions.push(newQuestion);
  return newQuestion;
};

export interface PostAnswerData {
  questionId: number;

  content: string;

  userName: string;

  created: Date;
}

export const postAnswer = async (
  answer: PostAnswerData,
): Promise<AnswerData | undefined> => {
  await wait(500);
  const question = questions.filter(
    (q) => q.questionId === answer.questionId,
  )[0];
  const answerInQuestion: AnswerData = {
    answerId: 99,
    ...answer,
  };
  question.answers.push(answerInQuestion);
  return answerInQuestion;
};
