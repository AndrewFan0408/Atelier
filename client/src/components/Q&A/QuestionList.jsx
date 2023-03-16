import React from 'react';
import QuestionItem from './QuestionItem';

const QuestionList = ( { questions } ) => {
  const [numberOfQuestions, setNumberOfQuestions] = React.useState(4);
  const handleShowMoreQuestionsClick = () => {
    setNumberOfAnswers(Object.values(answers).length);
  }
  return (
    <div>
      {questions.slice(0, numberOfQuestions).map(question => {
        return <QuestionItem question={question} key={question.question_id} />
      })}
      {numberOfQuestions < questions.length && (
        <button onClick={handleShowMoreQuestionsClick}>See more Questions</button>
      )}
    </div>
  )
}

export default QuestionList