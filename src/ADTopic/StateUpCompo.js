import React from 'react'

const StateUpCompo = (props) => {
    let name="RAHUL"
  return (
    <div>
     <button onClick={()=>props.fun(name)}>alert</button>
    </div>
  )
}

export default StateUpCompo
