import React from 'react';
import { useDispatch } from 'react-redux';
import QandA from './Q&A';
import RelatedProducts from './RelatedItems';
import logo from '../images/temp.png';
import fetchProducts from './Fetcher';
import ImageView from './Overview/ImageView';
import SpecsView from './Overview/SpecsView';

function App() {
  const dispatch = useDispatch();

  const [image, setImage] = React.useState('');
  const [formInput, setFormInput] = React.useState('');

  const imgFunc = (input) => {
    if (input === undefined || input.photos === undefined) {
      return;
    }
    setImage(input.photos[0].thumbnail_url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchProducts(formInput, true));
  };

  const handleChange = (evt) => {
    setFormInput(evt.target.value);
  };

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <div id="header">
        <img id="brand-title" src={logo} width={100} height={50} alt="company title" />
        <div id="header-right">
          <form id="searchStore" onSubmit={handleSubmit}>
            <label htmlFor="search-store">
              <input id="search-store" type="text" name="search-store" onChange={(e) => handleChange(e)} />
            </label>
            <input type="submit" />
          </form>
          <i className="fa-solid fa-cart-shopping fa-2x" />
          <i className="fa-solid fa-user fa-2x" />
        </div>
      </div>

      <div id="overview">
        <ImageView image={image} />
      </div>

      <div id="overview-info">
        <div id="sticky-item">
          <SpecsView imgFunc={imgFunc} />
        </div>
      </div>

      <div id="ratings-review">
        <h2>ratings and review</h2>
      </div>

      <div id="qna">
        <h2>Q&A</h2>
        <QandA />
      </div>

      <div id="related-items">
        <h2>Related Products</h2>
        <RelatedProducts />
      </div>
    </>
  );
}

export default App;
