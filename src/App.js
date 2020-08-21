import React from 'react';

const App = props => {
  let content = typeof window === 'undefined' ? 'server' : 'client';
  return <p>{content}</p>
}

export default App;
