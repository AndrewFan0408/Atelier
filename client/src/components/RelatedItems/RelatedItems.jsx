import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import RelatedItemCard from './RelatedItemCard';

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

function RelatedItems({ relatedIds, id }) {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [itemDetail, setItemDetail] = useState({});
  const [itemStyle, setItemStyle] = useState([]);
  const [itemImg, setItemImg] = useState('');
  const [itemRating, setItemRating] = useState(0);

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
    axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}`,
      {
        headers: { Authorization: process.env.AUTH_SECRET },
      },
    )
      .then((response) => {
        setItemDetail(response.data);
      })
      .catch((error) => { throw error; });
    axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/styles`,
      {
        headers: { Authorization: process.env.AUTH_SECRET },
      },
    )
      .then(({ data }) => {
        setItemStyle(data.results);
        setItemImg(data.results[0].photos[0].thumbnail_url);
      })
      .catch((error) => { throw error; });
    axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${id}`,
      {
        headers: { Authorization: process.env.AUTH_SECRET },
      },
    )
      .then(({ data }) => {
        setItemRating(data.ratings);
      })
      .catch((error) => { throw error; });
  }, [id]);

  console.log('inside relatedItems after useEffect, itemDetail = ', itemDetail);
  console.log('inside relatedItems after useEffect, itemStyle = ', itemStyle);
  console.log('inside relatedItems after useEffect, itemImg = ', itemImg);
  console.log('inside relatedItems after useEffect, itemRating = ', itemRating);
  console.log('inside relatedItems after useEffect, itemCategory = ', itemDetail.category);

  return (
    <div>
      <RelatedItemsContainer>
        {currentProductIndex > 0 && (
        <button type="button" className="prevButton" onClick={handlePrevious}>{'\u2190'}</button>
        )}
        <RelatedItemCard
          itemPrice={itemDetail.default_price}
          itemCategory={itemDetail.category}
          itemName={itemDetail.name}
          itemStyle={itemStyle}
          itemImg={itemImg}
          itemRating={itemRating}
          key={id}
        />
        {currentProductIndex < relatedIds.length - 1 && (
        <button type="button" className="nextButton" onClick={handleNext}>{'\u2192'}</button>
        )}
      </RelatedItemsContainer>
    </div>
  );
}

RelatedItems.propTypes = {
  relatedIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  id: PropTypes.number.isRequired,
};

export default RelatedItems;
