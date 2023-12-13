import React from 'react'
import IncrementCountarHoc from './IncrementCountarHoc'

const OnMouseHoverCompo = (props) => {
  return (
    <div>
      <h1>onMouseHover Compo : {props.countar} </h1>
      <button onMouseOver={props.handle}>onMouse btn</button>
    </div>
  )
}

export default IncrementCountarHoc(OnMouseHoverCompo)
