import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import RelatedItemCard from './RelatedItemCard';
import Outfits from './Outfits';
// import Modal from './Modal';

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

// const RelatedItemsContainer = styled.div`
//   display: grid;
//   gap: 1vw;
//   grid-auto-flow: column;
//   grid-auto-columns: 21%;
//   overflow-x: hidden;
//   overscroll-behavior-inline: contain;
//   scroll-behavior: smooth;
//   scroll-snap-type: inline mandatory;
//   scroll-snap-align: start;
//   scroll-padding-inline: 1rem;
// `;

function RelatedProducts() {
  const relatedIds = useSelector((state) => state.relatedItemsReducer.relatedIds);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  // const [showModal, setShowModal] = useState(false);

  // const handleCardClick = () => {
  //   setShowModal(true);
  // };
  // const handleClose = () => {
  //   setShowModal(false);
  // };

  // console.log('inside index.jsx, ', relatedIds); // [41033, 40643, 40756, 41146]

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

  // return (
  //   <div id="RelatedItems" className="Outfits">
  //     {relatedIds.length === 0 ? (
  //       <p>There are no related items to this product</p>
  //     ) : (
  //       relatedIds.map((id) => (
  //         <RelatedItemCard relatedIds={relatedIds} id={id} />
  //       ))
  //     )}
  //     <Outfits />
  //   </div>
  // );

  return (
    <div id="RelatedItems" className="Outfits">
      <RelatedItemsContainer>
        {currentProductIndex > 0 && (
        <button type="button" className="prevButton" onClick={handlePrevious}>{'\u2190'}</button>
        )}
        {relatedIds.length === 0 ? (
          <p>There are no related items to this product</p>
        ) : (
          relatedIds.map((id) => (
            <RelatedItemCard id={id} key={id} />
          ))
        )}
        {currentProductIndex + 4 < relatedIds.length && (
        <button type="button" className="nextButton" onClick={handleNext}>{'\u2192'}</button>
        )}
        <br />
      </RelatedItemsContainer>
      <Outfits />
    </div>
  );
}

export default RelatedProducts;
