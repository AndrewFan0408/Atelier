import React, { useState } from 'react';
import QuestionList from './QuestionList';
import { useSelector, useDispatch } from 'react-redux';
const QandA = ( { product_id }) => {
  // create axios get request to /qa/questions?=product_id
const questions = useSelector(state => state.questions);
return (
    <div id="QandA">
    <h1>Questions & Answers</h1>
    {questions.length === 0 ? (
        <p>No questions have been submited to this product</p>
        // ADD BUTTON TO QUESTION IMPORT FORM
    ) :
    <QuestionList questions={questions} />
    }
    </div>
)
};

export default QandA;