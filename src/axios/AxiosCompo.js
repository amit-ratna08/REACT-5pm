import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosCompo = () => {
    const [username,setUsername]=useState([])

    useEffect(()=>{
       axios.get("https://jsonplaceholder.typicode.com/users")
       .then((response)=>{
        console.log(response)
        setUsername(response.data)
       })


    },[])
  return (
    <div>
      {
        username.map((res)=>{
            return(
                <>
                {res.name}<br />
                </>
            )
        })
      }
    </div>
  )
}

export default AxiosCompo
