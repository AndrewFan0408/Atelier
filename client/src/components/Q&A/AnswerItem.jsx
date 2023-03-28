import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

function AnswerItem({ answer }) {
  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/';
  const date = new Date(answer.date);
  const formattedDate = `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`;
  const [voted, setVoted] = React.useState(false);
  const [reported, setReported] = React.useState(false);

  const handleHelpfulClick = () => {
    axios.put(`${url}${answer.id}/helpful`, null, {
      headers: {
        Authorization: process.env.AUTH_SECRET,
      },
    })
      .catch((err) => { throw err; });
    setVoted(!voted);
  };
  const handleReportAnswerClick = () => {
    axios.put(`${url}${answer.id}/report`, null, {
      headers: {
        Authorization: process.env.AUTH_SECRET,
      },
    })
      .catch((err) => { throw err; });
    setReported(true);
  };
  return (
    <div className="answer-item-container">
      <div className="answer-container">
        <h3 className="answer-literal">A:</h3>
        <p className="answer-body">{answer.body}</p>
      </div>
      <div className="additional-info-container">
        <div className="answer-seller-info">
          <p>
            by:&nbsp;
            {answer.answerer_name === 'seller'
              ? <strong>{answer.answerer_name}</strong>
              : answer.answerer_name}
            , on:&nbsp;
            {formattedDate}
          </p>
        </div>
        <div className="helpful-container">
          <div className="helpful-increment-container">
            {!voted && (
            <button onClick={handleHelpfulClick} className="helpful-link" type="button">
              {' '}
              Helpful? Yes (
              {answer.helpfulness}
              )
            </button>
            )}
          </div>
          {voted && (
            <span>Thanks for your feedback</span>
          )}
          <br />
          &nbsp;&nbsp;&nbsp;
          <div className="report-link-container">
            {!reported && (
              <button type="button" onClick={handleReportAnswerClick} className="report-link">Report</button>
            )}
            {reported && (
              <span>Reported</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
AnswerItem.propTypes = {
  answer: PropTypes.shape({
    answerer_name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    helpfulness: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
export default AnswerItem;
