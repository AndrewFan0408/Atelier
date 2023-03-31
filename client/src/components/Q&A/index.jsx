import React from 'react';
import { useSelector } from 'react-redux';
import QuestionList from './QuestionList';
import Modal from './Modal';

function QandA() {
  const questions = useSelector((state) => state.answerListReducer.questions);
  const [showModal, setShowModal] = React.useState(false);
  const handleAddQuestion = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div id="QandA">
      {questions.length === 0 ? (
        <p>No questions have been submited to this product</p>
      )
        : <QuestionList questions={questions} />}
      <button onClick={handleAddQuestion} type="button" className="add-question-button">Add A Question</button>
      {showModal && (
      <Modal isAnswer="false" handleClose={handleClose} />
      )}
    </div>
  );
}

export default QandA;
