import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';
// import { useSelector, useDispatch } from 'react-redux';

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

const CardCategory = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
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

function RelatedItemCard({ id }) {
  const [itemDetail, setItemDetail] = useState({});
  const [itemStyle, setItemStyle] = useState([]);
  const [itemImg, setItemImg] = useState('');
  const [itemRating, setItemRating] = useState(0);

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

  function renderStars() {
    const ratingFloor = Math.floor(itemRating);
    const ratingDecimal = itemRating - ratingFloor;
    const solidStars = ratingFloor;
    const outlinedStars = Math.round(ratingDecimal * 4);

    const stars = [];

    for (let i = 0; i < 5; i += 1) {
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
  }

  // function renderRating(ratings) {
  //   if (ratings) {
  //     let count = null;
  //     let total = null;
  //     const final = Object.entries(ratings);
  //     final.forEach((rating) => {
  //       count += Number(rating[1]);
  //       total += (rating[0] * rating[1]);
  //     });
  //     return (total / count).toFixed(1);
  //   }
  // }

  return (
    <div>
      <CardContainer>
        {/* <CardImage> */}
        <img alt={itemDetail.name} src={itemImg} />
        {/* </CardImage> */}
        <CardInfo>
          <CardCategory>{itemDetail.category}</CardCategory>
          <CardName>{itemDetail.name}</CardName>
          <CardPrice>{`$${itemDetail.default_price}`}</CardPrice>
          {itemRating > 0 && (
            <CardRating>
              {renderStars()}
              {/* <span>{`(${itemRating})`}</span> */}
            </CardRating>
          )}
        </CardInfo>
      </CardContainer>
    </div>
  );
}

RelatedItemCard.propTypes = {
  id: PropTypes.number.isRequired,
};

// RelatedItemCard.propTypes = {
//   itemCategory: PropTypes.string.isRequired,
//   itemName: PropTypes.string.isRequired,
//   itemPrice: PropTypes.string.isRequired,
//   itemImg: PropTypes.string.isRequired,
//   itemRating: PropTypes.shape({
//     rating: PropTypes.string.isRequired,
//   }),
// };

export default RelatedItemCard;
