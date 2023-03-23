import React from 'react';
import AnswerList from './AnswerList';
import Modal from './Modal';
const QuestionItem = ( { question, questionId } ) => {
  return (
    <div>
      <h3>Q: {question.question_body}</h3>
      <AnswerList answers={question.answers} question={question}/>
    </div>
  )
}

export default QuestionItem