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
  // const [image, setImage] = React.useState('');

  React.useEffect(() => {
    setCategory(store.product.category);
    setName(store.product.name);
    setOverview(store.product.description);
  }, [store]);

  console.log(store);

  // const imgFunc = (input) => {
  //   if (input === undefined || input.photos === undefined) {
  //     return;
  //   }
  //   setImage(input.photos[0].thumbnail_url);
  //   bigImg(image);
  // };

  return (
    <>
      <h1>{name}</h1>
      <h5>{category}</h5>
      <Stars />
      <p>{overview}</p>
      <StyleSelector imgFunc={imgFunc} />
      {/* <img src={image} alt="asdf" /> */}
    </>
  );
}

SpecsView.propTypes = {
  imgFunc: PropTypes.func.isRequired,
};

export default SpecsView;
