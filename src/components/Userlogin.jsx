import React from 'react'
import { useState } from 'react'

function Userlogin() {
    
    const [show, setShow] = useState(false)
  return (
    <>
    <button onClick={()=> setShow(!show)}>Toggle</button>
    {show ? <h1>User Login Component</h1> : null}

    </>
  )
}

export default Userlogin