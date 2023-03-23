import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
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

const RelatedItemCard = ({ product }) => {
  const { category, name, default_price, rating, numReviews, imageUrl } = product;

  const renderStars = () => {
    const ratingFloor = Math.floor(rating);
    const ratingDecimal = rating - ratingFloor;
    const solidStars = ratingFloor;
    const outlinedStars = Math.round(ratingDecimal * 4);

    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < solidStars) {
        stars.push(<SolidStar key={`star-${i}`} className="fa-solid fa-star" />);
      } else if (i === solidStars && outlinedStars > 0) {
        stars.push(<SolidStar key={`star-${i}`} className="fa-solid fa-star" style={{ width: `${outlinedStars * 25}%` }} />);
        stars.push(<OutlinedStar key={`star-outline-${i}`} className="fa-regular fa-star" style={{ width: `${(4 - outlinedStars) * 25}%` }} />);
      } else {
        stars.push(<OutlinedStar key={`star-outline-${i}`} className="fa-regular fa-star" />);
      }
    }

    return stars;
  };

  return (
    <CardContainer>
      <a href={`/products/${product.id}`}>
        <CardImage src={imageUrl} alt={`${category} - ${name}`} />
      </a>
      <CardInfo>
        <CardName>{name}</CardName>
        <CardPrice>{`$${default_price}`}</CardPrice>
        {numReviews > 0 && (
          <CardRating>
            {renderStars()}
            <span>{`(${numReviews})`}</span>
          </CardRating>
        )}
      </CardInfo>
    </CardContainer>
  );
};

export default RelatedItemCard;
