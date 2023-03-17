import React from 'react';
import AnswerItem from './AnswerItem';

const AnswerList = ( { answers } )=> {
  const [numberOfAnswers, setNumberOfAnswers] = React.useState(2);
  const handleShowMoreAnswersClick = () => {
    setNumberOfAnswers(Object.values(answers).length);
  }
  const handleShowLessAnswersClick = () => {
    setNumberOfAnswers(2);
  }
  return (
    <div>
      {Object.values(answers).slice(0, numberOfAnswers).map(answer => {
        return <AnswerItem answer={answer} key={answer.id} />
      })}
      {numberOfAnswers < Object.values(answers).length && (
        <button onClick={handleShowMoreAnswersClick}>Load More Answers</button>
      )}
      {numberOfAnswers === Object.values(answers).length && (
        <button onClick={handleShowLessAnswersClick}>See Less Answers</button>
      )}
    </div>
  )
}
export default AnswerList