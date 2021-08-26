import React from 'react';
import { QuestionData } from './QuestionsData';

interface Props {
  data: QuestionData[];
}

export const QuestionList = ({ data }: Props) => (
  <ul>
    {data.map((question) => (
      <li key={question.questionId}></li>
    ))}
  </ul>
);
