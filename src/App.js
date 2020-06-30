import React, { useState } from 'react';

const App = props => {
  console.log(props.id);
  return (
    <div style={{backgroundColor: 'red'}}>
      {props.id}
    </div>
  );
}

export default App;
