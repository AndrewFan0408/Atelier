import React from 'react';
import QuestionItem from './QuestionItem';
import { useSelector, useDispatch } from 'react-redux';
const QuestionList = ( { questions } ) => {
  const numberOfQuestions = useSelector(state => state.numberOfQuestions);
  const productId = useSelector(state => state.productId);
  const [moreQuestions, setMoreQuestions] = React.useState(false);
  const [query, setQuery] = React.useState('');

  const dispatch = useDispatch();
  const handleShowMoreQuestionsClick = () => {
    dispatch({
      type: 'SHOW_MORE_QUESTIONS',
    })
    document.getElementByClassName('answer-list').style.overflowY = 'scroll';
    setMoreQuestions(true);
  }
  const handleShowLessQuestionsClick = () => {
    dispatch({
      type: 'SHOW_LESS_QUESTIONS',
    })
    document.getElementByClassName('answer-list').style.overflowY = 'hidden';
    setMoreQuestions(false);
  }
  const sortedQuestions = [...questions].sort((a, b) => b.helpfulness - a.helpfulness);
  const filteredQuestions = query.length > 2 ? sortedQuestions.filter(question => question.question_body.toLowerCase().includes(query.toLowerCase())) : sortedQuestions;
  return (
    <div>
      <div className='qna-search'>
        <input type='text' value={query} onChange={e => setQuery(e.target.value)} placeholder='Have a question? Search for answers…'/>
      </div>
      {filteredQuestions.slice(0, numberOfQuestions).map(question => {
        return <QuestionItem question={question} key={question.question_id}/>
      })}
      {numberOfQuestions < sortedQuestions.length && (
        <button onClick={handleShowMoreQuestionsClick}>See more Questions</button>
      )}
      {moreQuestions && (
        <button onClick={handleShowLessQuestionsClick}>Collapse Questions</button>
      )}
    </div>
  )
}

export default QuestionList