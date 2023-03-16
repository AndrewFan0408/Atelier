import React from 'react';

const AnswerItem = ( { answer } ) => {
  console.log(answer)
  return (
    <div>
      <p>A: {answer.body} </p>
      <p>by {answer.answerer_name === 'seller' ?
      <strong>{answer.answerer_name}</strong> :
      answer.answerer_name}, {answer.date} </p>
      <p>👍: {answer.helpfulness} </p>
    </div>
  )
}
export default AnswerItem