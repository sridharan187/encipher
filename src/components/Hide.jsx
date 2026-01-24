import React from 'react'
import { useState } from 'react'

function Hide() {

    const [show,setShow] = useState(true)

   
    
  return (
    
   <>
   {show ? <h1>This is hidden component</h1> : null}
   <button onClick={()=>{
    setShow(!show)
   }}>Toggle</button>


   </>
    

  )
}

export default Hide