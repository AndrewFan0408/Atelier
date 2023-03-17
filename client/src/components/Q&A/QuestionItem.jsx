import React from 'react';
import AnswerList from './AnswerList';
const QuestionItem = ( { question, questionId } ) => {
  return (
    <div>
      <h3>Q: {question.question_body}</h3>
      <AnswerList answers={question.answers} />
    </div>
  )
}

export default QuestionItem