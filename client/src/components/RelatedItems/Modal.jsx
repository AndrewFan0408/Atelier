import React from 'react';
import PropTypes from 'prop-types';
import ComparisonTable from './ComparisonTable';

const Modal = ({ show, handleClose, title, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-header">
          <h2>{title}</h2>
          <button type="button" className="close" onClick={handleClose}>
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </section>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

const RelatedItemsModal = ({ currentItem, relatedItems, show, handleClose }) => {
  const items = [currentItem, ...relatedItems];

  const comparisonTable = <ComparisonTable items={items} />;

  return (
    <Modal show={show} handleClose={handleClose} title="Comparing">
      {comparisonTable}
    </Modal>
  );
};

RelatedItemsModal.propTypes = {
  currentItem: PropTypes.object.isRequired,
  relatedItems: PropTypes.array.isRequired,
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default RelatedItemsModal;
