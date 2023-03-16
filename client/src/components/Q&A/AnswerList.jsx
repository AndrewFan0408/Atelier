import React from 'react';
import AnswerItem from './AnswerItem';

const AnswerList = ( { answers } )=> {
  const [numberOfAnswers, setNumberOfAnswers] = React.useState(2);
  console.log(answers);
  const handleShowMoreQuestionsClick = () => {
    setNumberOfAnswers(Object.values(answers).length);
  }
  return (
    <div>
      {Object.values(answers).slice(0, numberOfAnswers).map(answer => {
        return <AnswerItem answer={answer} key={answer.id} />
      })}
      {numberOfAnswers < Object.values(answers).length && (
        <button onClick={handleShowMoreQuestionsClick}>Load More Answers</button>
      )}
    </div>
  )
}
export default AnswerList