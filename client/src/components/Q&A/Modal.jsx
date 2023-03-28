import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function Modal({ isAnswer, handleClose, question }) {
  const currentProduct = useSelector((state) => state.answerListReducer.product);
  const title = isAnswer === 'true' ? 'Submit your Answer' : 'Ask Your Question';
  const subTitle = isAnswer === 'true' ? `${currentProduct.name}: ${question.question_body}` : `About the ${currentProduct.name}`;
  const [answerOrQuestion, setAnswerOrQuestion] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');
  const handleQuestionFormSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@') || !email.includes('.')) {
      setError('Email not in correct format');
      return;
    }
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', {
      body: answerOrQuestion,
      name,
      email,
      product_id: currentProduct.id,
    }, {
      headers: {
        Authorization: process.env.AUTH_SECRET,
      },
    })
      .catch((err) => { throw err; });
    handleClose();
  };
  const handleAnswerFormSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@') || !email.includes('.')) {
      setError('Email not in correct format');
      return;
    }
    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${question.question_id}/answers`, {
      body: answerOrQuestion,
      name,
      email,
    }, {
      headers: {
        Authorization: process.env.AUTH_SECRET,
      },
    })
      .catch((err) => { throw err; });
    handleClose();
  };
  const handleAnswerOrQuestionChange = (e) => {
    setAnswerOrQuestion(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="modal" data-testid="modal">
      {isAnswer === 'true' ? (
        <form onSubmit={handleAnswerFormSubmit} data-testid="content1">
          <h1>{title}</h1>
          <h3>{subTitle}</h3>
          <label htmlFor="answer-input">
            Your Answer? (mandatory)
            <textarea
              id="answer-input"
              type="text"
              value={answerOrQuestion}
              onChange={handleAnswerOrQuestionChange}
              maxLength={1000}
              placeholder="Why did you like the product or not?"
              required
            />
          </label>
          <label htmlFor="name-input">
            What is your nickname? (mandatory)
            <textarea
              id="name-input"
              type="text"
              value={name}
              onChange={handleNameChange}
              maxLength={60}
              placeholder="Example: jackson11!"
              required
            />
          </label>
          <p>For privacy reasons, do not use your full name or email address.</p>
          <label htmlFor="email-input">
            What is your email? (mandatory)
            <textarea
              id="email-input"
              type="text"
              value={email}
              onChange={handleEmailChange}
              maxLength={60}
              placeholder="example@email.com"
              required
            />
          </label>
          <p>For authentication reasons, you will not be emailed.</p>
          <button type="submit">Submit Answer</button>
          {error && (
            <p>{error}</p>
          )}
        </form>
      ) : (
        <form onSubmit={handleQuestionFormSubmit} data-testid="content2">
          <h1>{title}</h1>
          <h5>{subTitle}</h5>
          <label htmlFor="question-input">
            Your Question? (mandatory)
            <textarea
              id="question-input"
              type="text"
              value={answerOrQuestion}
              onChange={handleAnswerOrQuestionChange}
              maxLength={1000}
              required
            />
          </label>
          <label htmlFor="name-input">
            What is your nickname? (mandatory)
            <textarea
              id="name-input"
              type="text"
              value={name}
              onChange={handleNameChange}
              maxLength={60}
              placeholder="Example: jackson11!"
              required
            />
          </label>
          <p>For privacy reasons, do not use your full name or email address.</p>
          <label htmlFor="email-input">
            What is your email? (mandatory)
            <textarea
              id="email-input"
              type="text"
              value={email}
              onChange={handleEmailChange}
              maxLength={60}
              placeholder="example@email.com"
              required
            />
          </label>
          <p>For authentication reasons, you will not be emailed.</p>
          <button type="submit">Submit Question</button>
          {error && (
            <p>{error}</p>
          )}
        </form>
      )}
    </div>
  );
}

Modal.defaultProps = {
  question: null,
};
Modal.propTypes = {
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
  }),
  isAnswer: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Modal;
