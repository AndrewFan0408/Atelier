import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Stars from './Stars';
import StyleSelector from './StyleSelector';

function SpecsView({ imgFunc }) {
  const store = useSelector((state) => state.overviewReducer);
  const [category, setCategory] = React.useState();
  const [name, setName] = React.useState();
  const [overview, setOverview] = React.useState();
  const [discount, setDiscount] = React.useState();
  const [price, setPrice] = React.useState();
  const [id, setId] = React.useState();
  // const [image, setImage] = React.useState('');

  React.useEffect(() => {
    setCategory(store.product.category);
    setName(store.product.name);
    setOverview(store.product.description);
    setId(store.product.id);
  }, [store]);

  console.log(store);

  // const imgFunc = (input) => {
  //   if (input === undefined || input.photos === undefined) {
  //     return;
  //   }
  //   setImage(input.photos[0].thumbnail_url);
  //   bigImg(image);
  // };

  const myURL = new URL(`http://localhost:8080/?_name=${id}`);
  console.log(myURL.href);

  return (
    <>
      <p className="category">{category}</p>
      <Stars />
      <div className="product-big">
        <h3 className="product-name">{name}</h3>
        <h1 className="sliced-through">
          {discount}
        </h1>
        <h1 id="price">
          $
          {price}
        </h1>
      </div>
      <div className="overview-text">
        <p>{overview}</p>
      </div>
      <StyleSelector imgFunc={imgFunc} setPrice={setPrice} setDiscount={setDiscount} />
      {/* <img src={image} alt="asdf" /> */}
      <a href={`https://www.facebook.com/sharer/sharer.php?u=localhost:8080/?${myURL.href}`} target="_blank" rel="noreferrer">
        Share on Facebook
      </a>
    </>
  );
}

SpecsView.propTypes = {
  imgFunc: PropTypes.func.isRequired,
};

export default SpecsView;
