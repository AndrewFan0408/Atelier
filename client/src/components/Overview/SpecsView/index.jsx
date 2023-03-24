import React from 'react';
import { useSelector } from 'react-redux';
import Stars from './Stars';

function SpecsView() {
  const store = useSelector((state) => state.overviewReducer);
  const [category, setCategory] = React.useState();

  React.useEffect(() => {
    setCategory(store.product.category);
  }, [store]);

console.log(store.product.category);

  return (
    <>
      <Stars />
      <h5>{category}</h5>
    </>
  );
}

export default SpecsView;
