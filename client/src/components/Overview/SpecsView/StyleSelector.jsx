import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
/* eslint-disable-next-line react/style-prop-object */

function StyleSelector({ imgFunc }) {
  const store = useSelector((state) => state.overviewReducer);
  const [imgArr, setImgArr] = React.useState([]);
  const [cStyle, setCStyle] = React.useState({});

  React.useEffect(() => {
    setImgArr(store.styles);
    setCStyle(store.styles[0]);
    console.log(cStyle);
  }, [store]);

  React.useEffect(() => {
    imgFunc(cStyle);
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
};

export default StyleSelector;
