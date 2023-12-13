import React, { useEffect } from 'react'
// when useEffect hooks return function is know as component will unmount
const UseEffectCompo = () => {

    useEffect(()=>{
        console.log("WELCOME TO MY PAGE")
        return ()=>{
            console.log("BY BY I'M OUT YOUR PAGE")
        }
    },[])

  return (
    <div>
      <h1>CHILD COMPO</h1>
    </div>
  )
}

export default UseEffectCompo
