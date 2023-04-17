import React, { useEffect ,useState} from 'react'

const Details = () => {
const key = window.location.pathname.split("/").pop();

useEffect(() => {
    console.log(key)
}, [])
  return (
    <div>
        
    </div>
  )
}

export default Details