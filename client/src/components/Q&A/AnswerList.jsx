import React from 'react';
import AnswerItem from './AnswerItem';
import Modal from './Modal';

function AnswerList({ answers, question }) {
  const [numberOfAnswers, setNumberOfAnswers] = React.useState(2);
  const [showModal, setShowModal] = React.useState(false);
  const sAnswers = Object.values(answers).sort((a, b) => {
    if (a.answerer_name === 'seller' && b.answerer_name !== 'seller') {
      return -1;
    }
    if (b.answerer_name === 'seller' && a.answerer_name !== 'seller') {
      return 1;
    }
    return b.helpfulness - a.helpfulness;
  });
  const handleShowMoreAnswersClick = () => {
    setNumberOfAnswers(Object.values(answers).length);
  };
  const handleShowLessAnswersClick = () => {
    setNumberOfAnswers(2);
  };
  const handleAddAnswerClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div className="inner-answer-list-container">
      <div className="answer-list">
        {sAnswers.slice(0, numberOfAnswers).map((a) => <AnswerItem answer={a} key={a.id} question={question} />)}
      </div>
      <div className="answer-list-buttons">
        {numberOfAnswers < sAnswers.length && (
          <button onClick={handleShowMoreAnswersClick} type="button" className="see-more-answers-button">See More Answers</button>
        )}
        {numberOfAnswers === sAnswers.length && (
          <button onClick={handleShowLessAnswersClick} type="button" className="see-more-answers-button">Collapse Answers</button>
        )}
        <button onClick={() => handleAddAnswerClick(question)} type="button">Add Answer</button>
        {showModal && (
        <Modal isAnswer="true" question={question} handleClose={handleClose} />
        )}
      </div>
    </div>
  );
}
export default AnswerList;
