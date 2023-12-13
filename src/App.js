import React from 'react'
import OnCLickCompo from './Hoc/OnCLickCompo'
import OnMouseHoverCompo from './Hoc/OnMouseHoverCompo'
import KeyDownCompo from './Hoc/KeyDownCompo'

const App = () => {
  return (
    <div>
      <OnCLickCompo />
      <OnMouseHoverCompo />
      <KeyDownCompo />

    </div>
  )
}

export default App
