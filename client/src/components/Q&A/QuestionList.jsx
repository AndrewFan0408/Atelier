import React from 'react';
import QuestionItem from './QuestionItem';

const QuestionList = ( { questions } ) => {
  console.log(questions);
  return (
    <div>
      {questions.map(question => {
        return <QuestionItem question={question} key={question.question_id} />
      })}
    </div>
  )
}

export default QuestionList