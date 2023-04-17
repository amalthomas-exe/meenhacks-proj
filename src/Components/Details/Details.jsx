import React from 'react'

const Details = () => {
const key = window.location.pathname.split("/").pop();
  return (
    <div>
        {key}
    </div>
  )
}

export default Details