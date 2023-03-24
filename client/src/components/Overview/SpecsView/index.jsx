import React from 'react';
import { useSelector } from 'react-redux';

function SpecsView() {
  const [rating, setRating] = React.useState(0);
  const store = useSelector((state) => state.overviewReducer);
  // const testy = useSelector((state) => state.relatedItemsReducer);

  React.useEffect(() => {
    let entries = [];
    let sum = 0;
    let avg = 0;
    entries = Object.values(store.ratings);

    for (let i = 0; i < entries.length; i += 1) {
      sum += Number(entries[i]);
    }

    avg = sum / entries.length;

    if (Number.isNaN(avg)) {
      setRating(0);
    } else {
      setRating(avg);
    }
  }, [store]);

  console.log(store);

  return (
    <>
      <p>This is the image List section component</p>
      <div>
        <p>{rating}</p>
        <i className="fa-sharp fa-regular fa-star" />
      </div>
    </>
  );
}

export default SpecsView;
