import React, { useState } from 'react';
import Data from "./component/Data"
import List from './component/List';
function App() {
  const [people,setPeople] = useState(Data);
  return (
    <section className="container">
      <h3>{people.length} birthdays today</h3>
      <List people={people}></List>
      <button onClick={()=>{setPeople([])}}>Clear all</button>
    </section>
  );
}

export default App;