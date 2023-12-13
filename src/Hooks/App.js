import React, { useEffect, useState } from 'react'
import UseEffectCompo from './UseEffectCompo'
// if you want use lifecycle method in functional component then use useEffect hooks

const App = () => {
  const [count,setCount]=useState(1)
  const [countar,setCountar]=useState(2)

const [toggal,setToggal]=useState(true)

  // useEffect(()=>{
  //   console.log("call in mounting phase")
  // },[]) // mounting

  // useEffect(()=>{
  //   console.log("call when count state is updated")
  // },[count,countar]) // updating

  return (
    <div>
      {/* <h1>MY COUNTAR IS -: {count} </h1>
      <button onClick={()=>setCount(count+1)}>increment</button>


      <h1>MY SECOND COUNTAR IS -: {countar} </h1>
      <button onClick={()=>setCountar(countar+2)}>incrementby 2</button> */}


{
  toggal ? <UseEffectCompo /> : " "
}
<button onClick={()=>setToggal(!toggal)}>SHOW | HIDE</button>

    </div>
  )
}

export default App
