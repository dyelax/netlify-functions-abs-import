import React from 'react';

const App = props => {
  return (
    <div style={{textAlign: 'center', fontSize: 40}}>
      {props.path}
    </div>
  );
}

export default App;
