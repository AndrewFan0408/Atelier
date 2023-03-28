import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import QuestionItem from './QuestionItem';

function QuestionList({ questions }) {
  const numberOfQuestions = useSelector((state) => state.answerListReducer.numberOfQuestions);
  const [moreQuestions, setMoreQuestions] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const dispatch = useDispatch();
  const handleShowMoreQuestionsClick = () => {
    dispatch({
      type: 'SHOW_MORE_QUESTIONS',
    });
    setMoreQuestions(true);
  };
  const handleShowLessQuestionsClick = () => {
    dispatch({
      type: 'SHOW_LESS_QUESTIONS',
    });
    setMoreQuestions(false);
  };

  const sortedQuestions = [...questions].sort((a, b) => b.helpfulness - a.helpfulness);
  const filteredQuestions = query.length > 2
    ? sortedQuestions.filter((q) => q.question_body.toLowerCase().includes(query.toLowerCase()))
    : sortedQuestions;
  return (
    <div>
      <div className="qna-search">
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Have a question? Search for answers…" />
      </div>
      <div className="questions-list">
        {filteredQuestions.slice(0, numberOfQuestions).map((question) => (
          <div key={question.question_id}>
            <QuestionItem question={question} />
          </div>
        ))}
        {numberOfQuestions < sortedQuestions.length && (
          <button onClick={handleShowMoreQuestionsClick} type="button" className="more-questions">See more Questions</button>
        )}
        {moreQuestions && (
          <button onClick={handleShowLessQuestionsClick} type="button" className="more-questions">Collapse Questions</button>
        )}
      </div>
    </div>
  );
}

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    question_id: PropTypes.number.isRequired,
    question_body: PropTypes.string.isRequired,
    question_date: PropTypes.string.isRequired,
    question_helpfulness: PropTypes.number.isRequired,
    reported: PropTypes.bool.isRequired,
  })).isRequired,
};

export default QuestionList;
