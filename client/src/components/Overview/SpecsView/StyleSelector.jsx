import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
/* eslint-disable-next-line react/style-prop-object */

function StyleSelector({ imgFunc, setPrice, setDiscount }) {
  const store = useSelector((state) => state.overviewReducer);
  const [imgArr, setImgArr] = React.useState([]);
  const [cStyle, setCStyle] = React.useState();

  React.useEffect(() => {
    setImgArr(store.styles);
    setCStyle(store.styles[0]);
    console.log(cStyle);
  }, [store]);

  React.useEffect(() => {
    if (cStyle !== undefined) {
      imgFunc(cStyle);
      console.log('cStyle');
      console.log(cStyle.sale_price);

      if (cStyle.sale_price !== null) {
        setDiscount(`$${cStyle.original_price}`);
        setPrice(cStyle.sale_price);
        document.querySelector('#price').style.setProperty('padding-left', '7vw');
      } else {
        setDiscount();
        setPrice(cStyle.original_price);
        document.querySelector('#price').style.setProperty('padding-left', '1vw');
      }
    }
  }, [cStyle]);

  const clickHandler = (input) => setCStyle(input);

  return (
    <div className="thumbnails">
      {imgArr.map((element) => (
        <div className="thumbnailInd">
          <img className="thumbnailImg" onClick={() => clickHandler(element)} src={element.photos[0].thumbnail_url} alt={element.name} />
          <p>{element.name}</p>
        </div>
      ))}
    </div>
  );
}

StyleSelector.propTypes = {
  imgFunc: PropTypes.func.isRequired,
  setPrice: PropTypes.func.isRequired,
  setDiscount: PropTypes.func.isRequired,
};

export default StyleSelector;
