import React from 'react'

function Map() {
  return (
    
    <>
    <ul>
        {["Apple","Banana","orange"].map((e)=>
        <li>{e}</li>)}
    </ul>
    
    </>
  )
}

export default Map