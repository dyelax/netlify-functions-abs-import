import React, { useEffect, useState } from 'react';

const App = props => {
  const [onClient, setOnClient] = useState(false)
  useEffect(() => {
    setOnClient(true)
  }, [])

  return (
    onClient
      ? <p>Hydrated!</p>
      : <p>Not Hydrated :(</p>
  )
}
export default App;
