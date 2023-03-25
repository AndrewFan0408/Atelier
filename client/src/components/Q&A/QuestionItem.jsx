import React from 'react';
import PropTypes from 'prop-types';
import AnswerList from './AnswerList';

function QuestionItem({ question }) {
  return (
    <div>
      <div className="question-container">
        <h3 className="question-literal">Q:</h3>
        <p className="question-body">{question.question_body}</p>
      </div>
      <div className="answer-list-container">
        <AnswerList answers={question.answers} question={question} />
      </div>
    </div>
  );
}

QuestionItem.propTypes = {
  question: PropTypes.shape({
    answers: PropTypes.shape({
      0: PropTypes.shape({
        body: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        helpfulness: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        photos: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.number.isRequired,
          url: PropTypes.string.isRequired,
        })).isRequired,
      }),
    }),
    asker_name: PropTypes.string.isRequired,
    question_body: PropTypes.string.isRequired,
    question_date: PropTypes.string.isRequired,
    question_helpfulness: PropTypes.number.isRequired,
    question_id: PropTypes.number.isRequired,
    reported: PropTypes.bool.isRequired,
  }).isRequired,
};

export default QuestionItem;
