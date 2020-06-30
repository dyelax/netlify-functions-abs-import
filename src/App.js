import React, { useState } from 'react';

const App = props => {
  let [fRes, setFRes] = useState('');
  const triggerFunc = async () => {
    let res = await fetch('./netlify/functions/ping-func?id=123');
    let json = res.json();
  }

  return (
    <div>
      <button onClick={triggerFunc}>Click me</button>
      {fRes}
    </div>
  );
}

export default App;
