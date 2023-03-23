import React from 'react';
import PropTypes from 'prop-types';
import AnswerList from './AnswerList';
import Modal from './Modal';

function QuestionItem({ question, questionId }) {
  console.log('this is my question\n', question);
  return (
    <div>
      <h3>
        Q:
        {question.question_body}
      </h3>
      <AnswerList answers={question.answers} question={question} />
    </div>
  );
}

// QuestionItem.propTypes = {
//   question: PropTypes.shape({
//     review_id: PropTypes.number.isRequired,
//     rating: PropTypes.number.isRequired,
//     summary: PropTypes.string.isRequired,
//     recommend: PropTypes.bool.isRequired,
//     response: PropTypes.string,
//     body: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired,
//     reviewer_name: PropTypes.string.isRequired,
//     helpfulness: PropTypes.number.isRequired,
//     photos: PropTypes.arrayOf(PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       url: PropTypes.string.isRequired,
//     })).isRequired,
//   }).isRequired,
//   questionId: PropTypes.shape({

//   }),
// };

export default QuestionItem;
