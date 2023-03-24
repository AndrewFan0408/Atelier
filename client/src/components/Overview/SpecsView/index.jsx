import React from 'react';
import { useSelector } from 'react-redux';

function SpecsView() {
  const [rating, setRating] = React.useState(0);
  const [star, setStars] = React.useState(0);
  const store = useSelector((state) => state.overviewReducer);

  React.useEffect(() => {
    let entries = [];
    let sum = 0;
    let num = 0;
    let avg = 0;
    entries = Object.values(store.ratings);

    for (let i = 0; i < entries.length; i += 1) {
      sum += Number(entries[i]) * (i + 1);
      num += Number(entries[i]);
    }

    avg = sum / num;
    const stars = (Math.round(avg * 4) / 4).toFixed(2);

    if (Number.isNaN(avg)) {
      setRating(0);
      setStars(0);
    } else {
      setRating(avg);
      setStars(stars);
    }
  }, [store]);

  let output = [];
  const whole = Math.floor(rating);
  const partial = star - whole;
  output = [...Array(whole)].map(() => <i className="fa-sharp fa-solid fa-star" />);

  return (
    <>
      <p>This is the image List section component</p>
      <div>
        <p>{star}</p>
        <div id="review_stars">
          <p>placeholder</p>
          {output.map((element) => element)}
        </div>
        <i className="fa-sharp fa-regular fa-star" />
        <i className="fa-sharp fa-solid fa-star" />
      </div>
    </>
  );
}

export default SpecsView;
