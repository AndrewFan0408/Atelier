import React, { useState } from 'react';

import QuestionList from './QuestionList';
const example = {
  "product_id": "40344",
  "results": [
      {
          "question_id": 644921,
          "question_body": "Are these true to fit?",
          "question_date": "2023-02-01T00:00:00.000Z",
          "asker_name": "micro mouse",
          "question_helpfulness": 27,
          "reported": false,
          "answers": {
              "5990581": {
                  "id": 5990581,
                  "body": "hi",
                  "date": "2023-02-08T00:00:00.000Z",
                  "answerer_name": "seller",
                  "helpfulness": 6,
                  "photos": []
              },
              "5990599": {
                  "id": 5990599,
                  "body": "hehe",
                  "date": "2023-02-08T00:00:00.000Z",
                  "answerer_name": "haha",
                  "helpfulness": 4,
                  "photos": []
              },
              "5990722": {
                  "id": 5990722,
                  "body": "asdf",
                  "date": "2023-02-10T00:00:00.000Z",
                  "answerer_name": "1234",
                  "helpfulness": 2,
                  "photos": [
                      "https://i.ibb.co/hm1x3mF/38770a249335.jpg"
                  ]
              },
              "5990814": {
                  "id": 5990814,
                  "body": "This is a bit smaller than I expected",
                  "date": "2023-02-11T00:00:00.000Z",
                  "answerer_name": "Reviewed",
                  "helpfulness": 0,
                  "photos": [
                      "http://res.cloudinary.com/fec-cars/image/upload/v1676144741/ifavztl467jqwur29nnk.png"
                  ]
              },
              "5990821": {
                  "id": 5990821,
                  "body": "another answer to this question",
                  "date": "2023-02-11T00:00:00.000Z",
                  "answerer_name": "mo",
                  "helpfulness": 0,
                  "photos": []
              },
              "5990822": {
                  "id": 5990822,
                  "body": "I wonder what will happen",
                  "date": "2023-02-11T00:00:00.000Z",
                  "answerer_name": "random girl",
                  "helpfulness": 0,
                  "photos": []
              },
              "5990837": {
                  "id": 5990837,
                  "body": "hello",
                  "date": "2023-02-23T00:00:00.000Z",
                  "answerer_name": "ab",
                  "helpfulness": 0,
                  "photos": []
              },
              "5990838": {
                  "id": 5990838,
                  "body": "helo",
                  "date": "2023-02-23T00:00:00.000Z",
                  "answerer_name": "a",
                  "helpfulness": 0,
                  "photos": []
              },
              "5990839": {
                  "id": 5990839,
                  "body": "i like it",
                  "date": "2023-02-23T00:00:00.000Z",
                  "answerer_name": "jack",
                  "helpfulness": 0,
                  "photos": []
              }
          }
      }
  ]
}
const QandA = ( { product_id }) => {
  // create axios get request to /qa/questions?=product_id
  const [questions, setQuestion] = useState(example);
  return (
    <div id="QandA">
      <h1>Questions & Answers</h1>
      {questions.results.length === 0 ? (
        <p>No questions have been submited to this product</p>
        // ADD BUTTON TO QUESTION IMPORT FORM
      ) :
      <QuestionList questions={questions.results} />
      }
    </div>
  )
};

export default QandA;