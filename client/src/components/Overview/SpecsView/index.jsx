import React from 'react';
import { useSelector } from 'react-redux';
import Stars from './Stars';
import StyleSelector from './StyleSelector';

function SpecsView() {
  const store = useSelector((state) => state.overviewReducer);
  const [category, setCategory] = React.useState();
  const [name, setName] = React.useState();
  const [overview, setOverview] = React.useState();

  React.useEffect(() => {
    setCategory(store.product.category);
    setName(store.product.name);
    setOverview(store.product.description);
  }, [store]);

  console.log(store);

  return (
    <>
      <h3>{name}</h3>
      <h5>{category}</h5>
      <Stars />
      <p>{overview}</p>
      <StyleSelector />
    </>
  );
}

export default SpecsView;
