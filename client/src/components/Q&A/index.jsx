import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import QuestionList from './QuestionList';
import Modal from './Modal';

function QandA({ product_id }) {
  // create axios get request to /qa/questions?=product_id
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
      // ADD BUTTON TO QUESTION IMPORT FORM
      )
        : <QuestionList questions={questions} />}
      <button onClick={handleAddQuestion} type="button">Add A Question</button>
      {showModal && (
      <Modal isAnswer="false" handleClose={handleClose} />
      )}
    </div>
  );
}
QandA.propTypes = {
  product_id: PropTypes.number.isRequired,
};

export default QandA;
