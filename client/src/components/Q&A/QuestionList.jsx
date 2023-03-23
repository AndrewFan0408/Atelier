import React from 'react';
import QuestionItem from './QuestionItem';
import { useSelector, useDispatch } from 'react-redux';
const QuestionList = ( { questions } ) => {
  const numberOfQuestions = useSelector(state => state.numberOfQuestions);
  const productId = useSelector(state => state.productId);
  const handleShowMoreQuestionsClick = () => {
    dispatch({
      type: 'SHOW_MORE_QUESTIONS',
    })
  }
  const sortedQuestions = [...questions].sort((a, b) => b.helpfulness - a.helpfulness);
  return (
    <div> product id: {productId}
      {sortedQuestions.slice(0, numberOfQuestions).map(question => {
        return <QuestionItem question={question} key={question.question_id}/>
      })}
      {numberOfQuestions < sortedQuestions.length && (
        <button onClick={handleShowMoreQuestionsClick}>See more Questions</button>
      )}
    </div>
  )
}

export default QuestionList