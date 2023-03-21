import React from 'react';

const Modal = ( { product, handleClose, AnswerBoolean, question } ) => {
  const currentProduct = useSelector(state => state.product);
  const title = AnswerBoolean ? 'Submit your Answer' : 'Ask Your Question';
  const subTitle = AnswerBoolean ? `${product.name}: ${question.body}` : `About the ${product.name}`;
  const [answerOrQuestion, setAnswerOrQuestion] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!answerOrQuestion || name || email) {

    }
  }
  const handleAnswerOrQuestionChange = (e) => {
    setAnswerOrQuestion(e.target.value);
  }
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  return (
    <div className='modal'>
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
      {AnswerBoolean ? (
        <form onSubmit={handleFormSubmit}>
          <label>Your Answer? (mandatory)</label>
          <textarea
          value={answerOrQuestion}
          onChange={handleAnswerOrQuestionChange}
          maxLength={1000}
          required
          />
          <label>What is your nickname? (mandatory)</label>
          <textarea
          value={name}
          onChange={handleNameChange}
          maxLength={60}
          placeholder='Example: jackson11!'
          required
          />
          <p>For privacy reasons, do not use your full name or email address.</p>
          <label>What is your email? (mandatory)</label>
          <textarea
          value={email}
          onChange={handleEmailChange}
          maxLength={60}
          placeholder='Why did you like the product or not?'
          required
          />
          <p>For authentication reasons, you will not be emailed.</p>
          <button type='submit'>Submit Question</button>
        </form>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <label>Your Question? (mandatory)</label>
          <textarea
          value={question}
          onChange={handleAnswerOrQuestionChange}
          maxLength={1000}
          required
          />
          <label>What is your nickname? (mandatory)</label>
          <textarea
          value={name}
          onChange={handleNameChange}
          maxLength={60}
          placeholder='Example: jackson11!'
          required
          />
          <p>For privacy reasons, do not use your full name or email address.</p>
          <label>What is your email? (mandatory)</label>
          <textarea
          value={email}
          onChange={handleEmailChange}
          maxLength={60}
          placeholder='Why did you like the product or not?'
          required
          />
          <p>For authentication reasons, you will not be emailed.</p>
          <button type='submit'>Submit Question</button>
        </form>
      )}
    </div>
  )
}