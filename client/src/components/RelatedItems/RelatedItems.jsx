import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import itemContext from './itemContext';
import RelatedItemCard from './RelatedItemCard';

const RelatedItemsContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  padding: 20px 0;
`;

const RelatedItems = ({ relatedItems }) => {
  const [relatedProducts, setRelatedProducts] = useState(relatedItems);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  // const { itemID } = useContext(itemContext);
  console.log(relatedItems);

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

  // relatedItems.forEach(id => {
  //   useEffect(() => {

  //     axios.get(`/products/${id}/related`)
  //       .then((response) => {
  //         setRelatedProducts(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, [id])
  // });


  // return (
  //   <div id="RelatedItems">
  //     <p>This is the RelatedItems component</p>
  //   </div>
  // )

  return (
    <div>
      {/* <h2>Related Items</h2> */}
      {relatedProducts.length > 0 ? (
        <>
          <button onClick={handlePrevious} disabled={currentProductIndex === 0}>
            Prev
          </button>
          <button onClick={handleNext} disabled={currentProductIndex === relatedProducts.length - 1}>
            Next
          </button>
          <RelatedItemsContainer>
            {relatedProducts.map((product, index) => (
              <RelatedItemCard key={product.id} product={product} index={index} currentProductIndex={currentProductIndex} />
            ))}
          </RelatedItemsContainer>
        </>
      ) : (
        <p>No related items found.</p>
      )}
    </div>
  );
};

export default RelatedItems;
