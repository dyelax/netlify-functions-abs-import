import React, { useEffect, useState } from 'react';

const App = props => {
  const [onClient, setOnClient] = useState(false)
  useEffect(() => {
    setOnClient(true)
    console.log('onClient');
    console.log(window);
  }, [])

  return (
    onClient
      ? <p>Hydrated!</p>
      : <p>Not Hydrated :(</p>
  )
}
export default App;
