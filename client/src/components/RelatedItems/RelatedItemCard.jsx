import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 250px;
  height: 350px;
  margin-right: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  & > img {
    width: 100%;
    height: 70%;
    object-fit: cover;
    margin-bottom: 20px;
  }

  & > h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  & > p {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const CardImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const CardName = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const CardPrice = styled.span`
  font-size: 14px;
  margin-bottom: 5px;
`;

const CardRating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const SolidStar = styled.i`
  color: gold;
`;

const OutlinedStar = styled.i`
  color: gray;
`;

function RelatedItemCard({ productId }) {
  // const { id, category, name, default_price, rating, numReviews, imageUrl } = product;

  console.log('inside relatedItemCard: ', productId);

  // const renderStars = () => {
  //   const ratingFloor = Math.floor(rating);
  //   const ratingDecimal = rating - ratingFloor;
  //   const solidStars = ratingFloor;
  //   const outlinedStars = Math.round(ratingDecimal * 4);

  //   const stars = [];

  //   for (let i = 0; i < 5; i++) {
  //     if (i < solidStars) {
  //       stars.push(<SolidStar key={`star-${i}`} className="fa-solid fa-star" />);
  //     } else if (i === solidStars && outlinedStars > 0) {
  //       stars.push(<SolidStar key={`star-${i}`} className="fa-solid fa-star" style={{ width: `${outlinedStars * 25}%` }} />);
  //       stars.push(<OutlinedStar key={`star-outline-${i}`} className="fa-regular fa-star" style={{ width: `${(4 - outlinedStars) * 25}%` }} />);
  //     } else {
  //       stars.push(<OutlinedStar key={`star-outline-${i}`} className="fa-regular fa-star" />);
  //     }
  //   }

  //   return stars;
  // };

  return (
    <CardContainer>
      <a href={`/products/${productId}`}>
        <CardImage />
      </a>
      {/* <CardInfo>
        <CardName>{}</CardName>
        <CardPrice>{`$${}`}</CardPrice>
        {numReviews > 0 && (
          <CardRating>
            {renderStars()}
            <span>{`(${numReviews})`}</span>
          </CardRating>
        )}
      </CardInfo> */}
    </CardContainer>
  );
}

RelatedItemCard.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default RelatedItemCard;
