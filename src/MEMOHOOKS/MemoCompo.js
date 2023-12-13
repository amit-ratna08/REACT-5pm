import React, { memo } from 'react'

const MemoCompo = (props) => {
    console.log("MEMO COMPO")
  return (
    <div>
        <h1>MEMO COMPO VALUE {props.count} </h1>
        <button onClick={props.handle}>increment</button>
      
    </div>
  )
}

export default memo(MemoCompo)
