import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RelatedItems = () => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const handlePrevious = () => {
    if (currentProductIndex > 0) {
      setCurrentProductIndex(currentProductIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentProductIndex < relatedProducts.length -1) {
      setCurrentProductIndex(currentProductIndex + 1);
    }
  };

  return (
    <div id="RelatedItems">
      <p>This is the RelatedItems component</p>
    </div>
  )
};

export default RelatedItems;
