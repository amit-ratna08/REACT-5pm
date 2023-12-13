import React from 'react'
import IncrementCountarHoc from './IncrementCountarHoc'
const KeyDownCompo = (props) => {
  return (
    <div>
      <h1>onKey Down Compo : {props.countar} </h1>
      <button onKeyDown={props.handle}>KeyDown btn</button>
    </div>
  )
}

export default IncrementCountarHoc(KeyDownCompo)
