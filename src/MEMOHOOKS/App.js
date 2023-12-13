import React, { useCallback, useEffect, useState } from 'react'
import MemoCompo from './MemoCompo'

const App = () => {
    const [random,setRandom]=useState(Math.random())
    const [countar,setCountar]=useState(2)

useEffect(()=>{
    console.log("Call when random state is updated")
},[random])


useEffect(()=>{
    setInterval(()=>{
        setRandom(Math.random().toFixed(2))
    },2000)
},[])


const handlechange=useCallback(()=>{
    setCountar(countar+2)
},[countar])
  return (
    <div>
     <h1>MY RANDOM NUMBER IS  :-{random} </h1>

      <MemoCompo count={countar} handle={handlechange} />
    </div>
  )
}

export default App
