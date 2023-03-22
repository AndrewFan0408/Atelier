import React from 'react';
import Overview from './Overview';
import QandA from './Q&A';
import ImageView from './Overview/ImageView';
import SpecsView from './Overview/SpecsView';
import RandR from './R&R';
import RelatedItems from './RelatedItems';
import logo from "../images/temp.png";
import profile from "../images/placeholder_logo.png";
import axios from 'axios'
import { fetchProducts } from './Fetcher';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  console.log(`products ${products}`);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked');
  };

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  /*
    <h2>overview</h2>
    <h1>Montserrat (h1)</h1>
    <h3>Playfair Display (h3)</h3>
    <h5>Roboto (h5)</h5>
    <p>Lato (p)</p>
  */

  return (
    <>
      <div id="header">
        <img id="brand-title" src={logo} width={100} height={50}/>
        <div id="header-right">
          <form id="searchStore" onSubmit={handleSubmit}>
            <label>
              <input type="text" name="search-store"/>
            </label>
            <input type="submit"/>
          </form>
          <i class="fa-solid fa-cart-shopping fa-2x"></i>
          <i class="fa-solid fa-user fa-2x"></i>
        </div>
      </div>

      <div id="overview">
        <ImageView />
      </div>

      <div id="overview-info">
        <div id="sticky-item">
          <SpecsView />
        </div>
      </div>

      <div id="ratings-review">
        <h2>ratings and review</h2>
      </div>

      <div id="qna">
        <QandA />
      </div>

      <div id="related-items">
        <h2>Related Items</h2>
      </div>
    </>
  )
};

export default App;