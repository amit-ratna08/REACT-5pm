import React from 'react'
import IncrementCountarHoc from './IncrementCountarHoc'
const OnCLickCompo = (props) => {
  return (
    <div>
      <h1>ONClick Compo : {props.countar} </h1>
      <button onClick={props.handle}>onCLick btn</button>
    </div>
  )
}

export default IncrementCountarHoc(OnCLickCompo)
