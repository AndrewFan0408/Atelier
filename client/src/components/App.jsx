import React from 'react';
import Overview from './Overview';
import QandA from './Q&A';
import RandR from './R&R';
import RelatedItems from './RelatedItems';

const App = () => {
  const [form, setForm] = React.useState(<div id="blank"><p>change your form here to view it, but <em>DO NOT</em> alter anything else in this app</p></div>);

  //FILL IN YOUR COMPONENT BELOW, COMMENT OUT TAGS AFTER VIEWING
  React.useEffect(() => {
    // setForm(<FILL_ME_IN />);
  }, [])

  return (
    <div>
      <h1>Montserrat (h1)</h1>
      <h3>Playfair Display (h3)</h3>
      <h5>Roboto (h5)</h5>
      <p>Lato (p)</p>
      <>{form}</>
    </div>
  )
};

export default App;