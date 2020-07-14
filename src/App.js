import React from 'react';
import { testFunc } from 'utils.js';

const App = props => {
  return (
    <div style={{textAlign: 'center', fontSize: 40}}>
      {testFunc()}
    </div>
  );
}

export default App;
