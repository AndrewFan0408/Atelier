import React from 'react';
import { useSelector } from 'react-redux';
const exampleReview = require('./exampleReview');

const SpecsView = () => {
  const store = useSelector(state => state.overviewReducer.productId);
  console.log(`the initial state of bleh is ${store}`);

  return (
    <>
      <p>This is the image List section component</p>
      <div>
        <p>{exampleReview.results.rating}</p>
      </div>
    </>
  )
};

export default SpecsView;