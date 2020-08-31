import React, { useEffect, useState } from 'react';

const App = props => {
  const [onClient, setOnClient] = useState(false)
  console.log('Log test');
  useEffect(() => {
    setOnClient(true)
    console.log('onClient');
    console.log('window', window)
  }, [])

  return (
    onClient
      ? <p>Hydrated!</p>
      : <p>Not Hydrated :(</p>
  )
}
export default App;
