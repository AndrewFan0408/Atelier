import React from 'react';

const AnswerItem = ( { answer } ) => {

  return (
    <div>
      <p>A: {answer.body} </p>
      <p>date: {answer.date} </p>
      <p>user: {answer.answerer_name} </p>
      <p>👍: {answer.helpfulness} </p>
    </div>
  )
}
export default AnswerItem