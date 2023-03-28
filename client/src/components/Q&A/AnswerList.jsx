import React from 'react';
import PropTypes from 'prop-types';
import AnswerItem from './AnswerItem';
import Modal from './Modal';

function AnswerList({ question }) {
  const [numOfAns, setNumOfAns] = React.useState(2);
  const [showModal, setShowModal] = React.useState(false);
  const sAnswers = Object.values(question.answers).sort((a, b) => {
    if (a.answerer_name === 'seller' && b.answerer_name !== 'seller') { return -1; }
    if (b.answerer_name === 'seller' && a.answerer_name !== 'seller') { return 1; }
    return b.helpfulness - a.helpfulness;
  });
  const handleShowMoreAnswersClick = () => { setNumOfAns(Object.values(question.answers).length); };
  const handleShowLessAnswersClick = () => { setNumOfAns(2); };
  const handleAddAnswerClick = () => { setShowModal(true); };
  const handleClose = () => { setShowModal(false); };
  return (
    <div className="inner-answer-list-container">
      <div className="answer-list">
        {sAnswers.slice(0, numOfAns).map((a) => <AnswerItem answer={a} key={a.id} />)}
      </div>
      <div className="answer-list-buttons">
        {numOfAns < sAnswers.length && (
          <button onClick={handleShowMoreAnswersClick} type="button" className="see-more-answers-button">See More Answers</button>
        )}
        {numOfAns === sAnswers.length && (
          <button onClick={handleShowLessAnswersClick} type="button" className="see-more-answers-button">Collapse Answers</button>
        )}
        <button onClick={() => handleAddAnswerClick(question)} type="button" data-testid={question.question_id}>Add Answer</button>
        {showModal && (
        <Modal isAnswer="true" question={question} handleClose={handleClose} />
        )}
      </div>
    </div>
  );
}

AnswerList.propTypes = {
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
export default AnswerList;
