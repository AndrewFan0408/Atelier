import React from 'react';
import axios from 'axios';

const AnswerItem = ( { answer } ) => {
  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/'
  const date = new Date(answer.date);
  const formattedDate = `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`;
  const [voted, setVoted] = React.useState(false);
  const handleHelpfulClick = () => {
    axios.put(url + `${answer.id}` + '/helpful', null, {
      headers: {
        'Authorization': process.env.AUTH_SECRET
      }
    })
      .then(response => {
        console.log('sucessfully marked as helpful')
      })
      .catch(err => {
        console.log('err put request to server\n', err)
      });
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