import React from 'react';
import AnswerItem from './AnswerItem';

const AnswerList = ( { answers } )=> {
  const [numberOfAnswers, setNumberOfAnswers] = React.useState(2);
  const sortedAnswers = Object.values(answers).sort((a, b) => {
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
    document.getElementByClassName('answer-list').style.overflowY = 'scroll';
  }
  const handleShowLessAnswersClick = () => {
    setNumberOfAnswers(2);
    document.getElementByClassName('answer-list').style.overflowY = 'hidden';
  }

  return (
    <div className="answer-list-container">
      <div className="answer-list">
        {sortedAnswers.slice(0, numberOfAnswers).map(answer => {
          return <AnswerItem answer={answer} key={answer.id} />
        })}
      </div>
      {numberOfAnswers < sortedAnswers.length && (
        <button onClick={handleShowMoreAnswersClick}>See More Answers</button>
      )}
      {numberOfAnswers === sortedAnswers.length && (
        <button onClick={handleShowLessAnswersClick}>Collapse Answers</button>
      )}
    </div>
  )
}
export default AnswerList