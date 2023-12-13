import React, { useRef } from 'react'

const UnControllCompo = () => {
const inputref=useRef()

    function handlesubmit(e){
        e.preventDefault()
      console.log(inputref.current.value)

      var res=document.getElementById('inputsecond').value
      console.log(res)
    }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label>NAME :</label>
        <input type='text'  ref={inputref} />
     <br />

     
         <label>Nmae second :</label>
        <input type='text' id='inputsecond' />
        <br />
        <button>submit</button>
      </form>
    </div>
  )
}

export default UnControllCompo
