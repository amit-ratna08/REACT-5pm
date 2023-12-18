import React from 'react'
import useCountar from './useCountar'
const App = () => {
    const [count,Increment,Decrement]=useCountar()

    
  return (
    <div>
      <h1>MY COUNT VALUE IS :- {count}  </h1>

<button onClick={Increment}>increment</button>
<button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default App
