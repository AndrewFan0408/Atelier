import React from 'react';
import Overview from './Overview';
import QandA from './Q&A';
import RandR from './R&R';
import RelatedItems from './RelatedItems';

const App = () => {
  const [form, setForm] = React.useState(<div id="blank"><p>change your form here to view it, but <em>DO NOT</em> alter anything else in this app</p></div>);

  //FILL IN YOUR COMPONENT BELOW
  React.useEffect(() => {
    // setForm(<FILL_ME_IN />);
  }, [])

  return (
    <div>
      <h1>Amyvify</h1>
      <>{form}</>
    </div>
  )
};

export default App;