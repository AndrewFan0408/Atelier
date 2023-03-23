import React from 'react';
import AnswerItem from './AnswerItem';

function AnswerList({ answers, question }) {
  const [numberOfAnswers, setNumberOfAnswers] = React.useState(2);
  const sAnswers = Object.values(answers).sort((a, b) => {
    if (a.answerer_name === 'seller' && b.answerer_name !== 'seller') {
      return -1;
    }
    if (b.answerer_name === 'seller' && a.answerer_name !== 'seller') {
      return 1;
    }
    return b.helpfulness - a.helpfulness;
  });
  const handleShowMoreAnswersClick = () => {
    setNumberOfAnswers(Object.values(answers).length);
  };
  const handleShowLessAnswersClick = () => {
    setNumberOfAnswers(2);
  };

  return (
    <div className="answer-list-container">
      <div className="answer-list">
        {sAnswers.slice(0, numberOfAnswers).map((a) => <AnswerItem answer={a} key={a.id} question={question} />)}
      </div>
      {numberOfAnswers < sAnswers.length && (
        <button onClick={handleShowMoreAnswersClick} type="button">See More Answers</button>
      )}
      {numberOfAnswers === sAnswers.length && (
        <button onClick={handleShowLessAnswersClick} type="button">Collapse Answers</button>
      )}
    </div>
  );
}
export default AnswerList;
