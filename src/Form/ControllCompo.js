import React, { useState } from 'react'

const ControllCompo = () => {
    const [name,setName]=useState()

    function fundata(e){
  console.log(e.target.value)
  setName(e.target.value)
    }
  return (
    <div>
    <form>
       <input type="text"  value={name} onChange={fundata} /><br />
    </form>
      
    </div>
  )
}

export default ControllCompo
