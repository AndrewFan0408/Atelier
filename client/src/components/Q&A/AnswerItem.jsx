import React from 'react';

const AnswerItem = ( { answer } ) => {
  const date = new Date(answer.date);
  const formattedDate = `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`;
  const [voted, setVoted] = React.useState(false);
  console.log(answer);
  const handleHelpfulClick = () => {
    setVoted(!voted);
  }
  return (
    <div>
      <p>A: {answer.body} </p>
      <p>by {answer.answerer_name === 'seller' ?
      <strong>{answer.answerer_name}</strong> :
      answer.answerer_name}, {formattedDate} </p>
      <p>Helpful?
        {!voted && (
          <a onClick={handleHelpfulClick}> Yes ({answer.helpfulness})</a>
        )}
        {voted && (
          <span>   Thanks for your feedback</span>
        )}
      </p>
    </div>
  )
}
export default AnswerItem