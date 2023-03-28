import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import RelatedItems from './RelatedItems';
import Modal from './Modal';
import ComparisonTable from './ComparisonTable';
import PropTypes from 'prop-types';

function RelatedProducts({ related_id }) {
  const relatedItems = useSelector((state) => state.relatedItemsReducer.relatedIds) || [];
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(relatedItems[0]); // set the first item as the initial currentItem

  const handleCardClick = (item) => {
    setCurrentItem(item);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  console.log('inside related items', relatedItems);

  return (
    <div id="RelatedItems">
      {relatedItems.length === 0 ? (
        <p>There are no related items to this product</p>
      ) : (
        <>
          <RelatedItems relatedItems={relatedItems} handleCardClick={handleCardClick} />
          <Modal
            title="Comparing"
            show={showModal}
            handleClose={handleClose}
          >
            {/* pass the currentItem as a prop to the Modal */}
            <ComparisonTable current={currentItem} relatedItems={relatedItems} />
          </Modal>
        </>
      )}
    </div>
  )
};

RelatedProducts.propTypes = {
  related_id: PropTypes.number.isRequired,
};

export default RelatedProducts;