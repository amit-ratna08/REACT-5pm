import React,{useState} from 'react'

const useCountar = () => {
    const [count,setCount]=useState(1)

    function Increment(){
        setCount(count+1)
    }

    function Decrement(){
        setCount(count-1)
    }
  return [count,Increment,Decrement]
}

export default useCountar
