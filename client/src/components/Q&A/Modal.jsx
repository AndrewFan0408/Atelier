import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
const Modal = ( {  handleClose, AnswerBoolean, question } ) => {
  const currentProduct = useSelector(state => state.product);
  const title = AnswerBoolean ? 'Submit your Answer' : 'Ask Your Question';
  const subTitle = AnswerBoolean ? `${product.name}: ${question.body}` : `About the ${product.name}`;
  const [answerOrQuestion, setAnswerOrQuestion] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');
  const [photos, setPhotos] = React.useState([]);
  const handleQuestionFormSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@') || !email.includes('.')) {
      setError('Email not in correct format');
      return;
    }
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', {
      body: answerOrQuestion,
      name: name,
      email: email,
      product_id: currentProduct.id
    }, {
      headers: {
        Authorization: process.env.AUTH_SECRET
      }
    })
      .then(response => {
        console.log('sucessfully posted question to server');
      })
      .catch(err => {
        console.log('err posting question to server\n', err);
      });
  }
  const handleAnswerFormSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@') || !email.includes('.')) {
      setError('Email not in correct format');
      return;
    }
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/' + question.id + '/answers', {
      body: answerOrQuestion,
      name: name,
      email: email,
      photos: photos
    }, {
      headers: {
        Authorization: process.env.AUTH_SECRET
      }
    })
      .then(response => {
        console.log('sucessfully posted question to server');
      })
      .catch(err => {
        console.log('err posting question to server\n', err);
      });
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
        <form onSubmit={handleAnswerFormSubmit}>
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
        <form onSubmit={handleQuestionFormSubmit}>
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
          {error && (
            <p>{error}</p>
          )}
        </form>
      )}
    </div>
  )
}