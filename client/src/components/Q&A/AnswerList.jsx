import React from 'react';
import AnswerItem from './AnswerItem';

const AnswerList = ( { answers } )=> {
  console.log('these are my answers\n', answers)
  return (
    <div>
      {Object.values(answers).map(answer => {
        return <AnswerItem answer={answer} key={answer.id} />
      })}
    </div>
  )
}
export default AnswerList