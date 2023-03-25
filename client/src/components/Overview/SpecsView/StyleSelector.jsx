import React from 'react';
import { useSelector } from 'react-redux';
/* eslint-disable-next-line react/style-prop-object */

function StyleSelector() {
  const store = useSelector((state) => state.overviewReducer);
  const [imgArr, setImgArr] = React.useState([]);
  const [cStyle, setCStyle] = React.useState({name: null});

  React.useEffect(() => {
    setImgArr(store.styles);
    setCStyle(store.styles[0]);
    console.log(cStyle);
  }, [store]);

  return (
    <div className="thumbnails">
      {imgArr.map((element) => (
        <div className="thumbnailInd">
          <img className="thumbnailImg" src={element.photos[0].thumbnail_url} alt={element.name} />
          <p>{element.name}</p>
        </div>
      ))}
    </div>
  );
}

export default StyleSelector;
