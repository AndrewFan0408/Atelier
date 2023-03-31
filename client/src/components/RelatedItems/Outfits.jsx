import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function Outfits() {
  const [outfits, setOutfits] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  console.log('inside index.jsx Outfits, ', outfits);

  return (
    <div className="OutfitItems">
      <h2>Your Outfit</h2>
      {outfits.length === 0 ? (
        <p>Add Outfits</p>
      ) : (
          <RelatedItems relatedItems={relatedProducts} />
      )}
    </div>
    // <div></div>
  )
};

export default Outfits;