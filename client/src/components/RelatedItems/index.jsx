import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import RelatedItems from './RelatedItems';
import Outfits from './Outfits';
// import Modal from './Modal';

function RelatedProducts() {
  const relatedIds = useSelector(state => state.relatedItemsReducer.relatedIds);
  const [showModal, setShowModal] = useState(false);

  // const handleCardClick = () => {
  //   setShowModal(true);
  // };
  // const handleClose = () => {
  //   setShowModal(false);
  // };

  console.log('inside index.jsx, ', relatedIds); // [41033, 40643, 40756, 41146]

  return (
    <div id="RelatedItems" className="Outfits">
      {relatedIds.length === 0 ? (
        <p>There are no related items to this product</p>
      ) : (
        relatedIds.map((id) => (
          <RelatedItems relatedIds={relatedIds} id={id} />
        ))
      )}
      <Outfits />
    </div>
  )
};

export default RelatedProducts;
