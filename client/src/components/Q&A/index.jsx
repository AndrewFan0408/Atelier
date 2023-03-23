import React from 'react';
import QuestionList from './QuestionList';
import { useSelector, useDispatch } from 'react-redux';
import Modal from './Modal';
const QandA = ( { product_id }) => {
  // create axios get request to /qa/questions?=product_id
const questions = useSelector(state => state.answerListReducer.questions);
const [showModal, setShowModal] = React.useState(false);
const handleAddQuestion = () => {
  setShowModal(true);
}
const handleClose = () => {
  setShowModal(false);
}
return (
    <div id="QandA">
    <h1>Questions & Answers</h1>
    {questions.length === 0 ? (
        <p>No questions have been submited to this product</p>
        // ADD BUTTON TO QUESTION IMPORT FORM
    ) :
    <QuestionList questions={questions} />
    }
    <button onClick={handleAddQuestion}>Add A Question</button>
    {showModal && (
      <Modal isAnswer='false' handleClose={handleClose}/>
    )}
    </div>
)
};

export default QandA;