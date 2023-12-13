
import React from 'react'
import StateUpCompo from './ADTopic/StateUpCompo'

const App = () => {
    // let data="abcd"

    function fundata(name){
        alert("HELLO APTRON"+"    "+name)
    }

  return (
    <div>
      <StateUpCompo fun={fundata} />
    </div>
  )
}

export default App
