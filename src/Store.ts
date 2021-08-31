import { QuestionData } from './QuestionsData';

interface QuestionsState {
  readonly loading: boolean;
  readonly unanswered: QuestionData[];
  readonly viewing: QuestionData | null;
  readonly searched: QuestionData[];
}

export interface AppState {
  readonly questions: QuestionsState;
}

const initialQuestionsState: QuestionsState = {
  loading: false,
  unanswered: [],
  viewing: null,
  searched: [],
};

export const GETTINGUNANSWEREDQUESTIONS = 'GettingUnansweredQuestions';

export const gettingUnansweredQuestionsAction = () =>
  ({
    type: GETTINGUNANSWEREDQUESTIONS,
  } as const);

export const GOTUNANSWEREDQUESTIONS = 'GotUnansweredQuestions';

export const gotUnansweredQuestionsAction = (questions: QuestionData[]) =>
  ({
    type: GOTUNANSWEREDQUESTIONS,

    questions: questions,
  } as const);

export const GETTINGQUESTION = 'GettingQuestion';

export const gettingQuestionAction = () =>
  ({
    type: GETTINGQUESTION,
  } as const);

export const GOTQUESTION = 'GotQuestion';

export const gotQuestionAction = (question: QuestionData | null) =>
  ({
    type: GOTQUESTION,

    question: question,
  } as const);

export const SEARCHINGQUESTIONS = 'SearchingQuestions';

export const searchingQuestionsAction = () =>
  ({
    type: SEARCHINGQUESTIONS,
  } as const);

export const SEARCHEDQUESTIONS = 'SearchedQuestions';

export const searchedQuestionsAction = (questions: QuestionData[]) =>
  ({
    type: SEARCHEDQUESTIONS,

    questions,
  } as const);
