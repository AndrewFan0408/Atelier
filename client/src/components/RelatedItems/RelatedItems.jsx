import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RelatedItemCard from './RelatedItemCard';
import axios from 'axios';

const RelatedItemsContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  padding: 20px 0;
  scroll-behavior: smooth;

  & > div {
    scroll-snap-align: start;
  }
`;

const RelatedItems = ({ relatedIds, id }) => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  // const [prodDetail, setProdDetail] = useState({});
  // const [prodStyle, setProdStyle] = useState([]);
  // const [prodImg, setProdImg] = useState('');
  // const [prodRating, setProdRating] = useState(0);
  // const [currentProduct, setCurrentProduct] = useState(null);
  const currentProduct = useSelector((state) => state.relatedItemsReducer.relatedProduct);
  const dispatch = useDispatch();

  console.log('inside relatedItems, relatedIds = ', relatedIds);
  console.log('inside relatedItems...id = ', id);
  console.log('before useEffect, currentProduct = ', currentProduct);

  const handlePrevious = () => {
    if (currentProductIndex > 0) {
      setCurrentProductIndex(currentProductIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentProductIndex < relatedIds.length - 1) {
      setCurrentProductIndex(currentProductIndex + 1);
    }
  };

  useEffect(() => {
    dispatch({ type: 'FETCH_RELATED_PRODUCT_SUCCESS' });
  }, [id]);

  console.log('inside relatedItems after useEffect, currentProduct = ', currentProduct);

  return (
    <div>
        <>
        <RelatedItemsContainer>
          {currentProductIndex > 0 && (
            <button className="prevButton" onClick={handlePrevious}>{'\u2190'}</button>
          )}
          {relatedIds.map(id => (
            <RelatedItemCard productId={id} key={id}/>
          ))}
          {currentProductIndex < relatedIds.length - 1 && (
            <button className="nextButton" onClick={handleNext}>{'\u2192'}</button>
          )}
        </RelatedItemsContainer>
        </>
    </div>
  );
};

RelatedItems.propTypes = {
  relatedIds: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired
};

export default RelatedItems;
