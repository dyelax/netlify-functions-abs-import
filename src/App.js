import React from 'react';

const App = props => {
  let content = typeof window === 'undefined' ? 'NOT hydrated' : 'hydrated';
  return <p>{content}</p>
}

export default App;
