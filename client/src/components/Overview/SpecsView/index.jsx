import React from 'react';
import { useSelector } from 'react-redux';
const exampleReview = require('./exampleReview');

const SpecsView = () => {
  const store = useSelector(state => state.overviewReducer);
  const testy = useSelector(state => state.relatedItemsReducer);
  console.log(testy);

  return (
    <>
      <p>This is the image List section component</p>
      <div>
        <p>{exampleReview.results[0].rating}</p>
      </div>
    </>
  )
};

export default SpecsView;