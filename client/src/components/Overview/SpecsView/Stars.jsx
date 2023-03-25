import React from 'react';
import { useSelector } from 'react-redux';

function Stars() {
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
      setRating(num);
      setStars(stars);
    }
  }, [store]);

  let output = [];
  const whole = Math.floor(star);
  const partial = star - whole;
  output = [...Array(whole)].map(() => <li><i className="fa-sharp fa-solid fa-star" /></li>);

  if (partial > 0) {
    output.push(
      <li>
        <div className="fractured_div">
          <i className="fractured_sol fa-sharp fa-solid fa-star" />
          <i className="fractured_reg fa-sharp fa-regular fa-star" />
        </div>
      </li>,
    );
    output = output.concat([...Array(5 - (whole + 1))].map(() => <i className="regular-star fa-sharp fa-regular fa-star" />));

    document.documentElement.style.setProperty('--starPercentage', '20%');
    const r = document.querySelector(':root');

    switch (partial) {
      case 0.25:
        r.style.setProperty('--starPercentage', '57%');
        break;
      case 0.50:
        r.style.setProperty('--starPercentage', '47%');
        break;
      case 0.75:
        r.style.setProperty('--starPercentage', '38%');
        break;
      default:
        r.style.setProperty('--starPercentage', '100%');
        break;
    }
  } else {
    output = output.concat([...Array(5 - (whole))].map(() => <li><i className="regular-star fa-sharp fa-regular fa-star" /></li>));
  }
  console.log(output);

  if (rating === 0) {
    return (
      <div id="review_stars" />
    );
  }

  /*
    {star}
    {' '}
    out of 5 stars
  */

  return (
    <div className="stars-section">
      <div id="review_stars">
        <ol className="star_list">
          {output.map((element) => element)}
        </ol>
      </div>
      <p className="review_info">
        {rating}
        {' '}
        review(s)
      </p>
    </div>
  );
}

export default Stars;
