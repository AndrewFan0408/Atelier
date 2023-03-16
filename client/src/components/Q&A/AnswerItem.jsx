import React from 'react';

const AnswerItem = ( { answer } ) => {
  const date = new Date(answer.date);
  const formattedDate = `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`;
  return (
    <div>
      <p>A: {answer.body} </p>
      <p>by {answer.answerer_name === 'seller' ?
      <strong>{answer.answerer_name}</strong> :
      answer.answerer_name}, {formattedDate} </p>
      <p>👍: {answer.helpfulness} </p>
    </div>
  )
}
export default AnswerItem