import React,{useState} from 'react'
import './App.css';


function App() {
    const [show, setShow] = useState("");
  return (
    <>
     <div>
        <h1>Calculator</h1>
        <input type="text" value={show} readOnly />
        <br />  <br></br>
        <button onClick={() => setShow(show + "1")}>1</button>
        <button onClick={() => setShow(show + "2")}>2</button>
        <button onClick={() => setShow(show + "3")}>3</button>
        <button onClick={() => setShow(show + "+")}>+</button>
        <br />
        <button onClick={() => setShow(show + "4")}>4</button>
        <button onClick={() => setShow(show + "5")}>5</button>
        <button onClick={() => setShow(show + "6")}>6</button>
        <button onClick={() => setShow(show + "-")}>-</button>
        <br />
        <button onClick={() => setShow(show + "7")}>7</button>
        <button onClick={() => setShow(show + "8")}>8</button>  
        <button onClick={() => setShow(show + "9")}>9</button>
        <button onClick={() => setShow(show + "*")}>*</button>
        <br />
        <button onClick={() => setShow("")}>C</button>
        <button onClick={() => setShow(show + "0")}>0</button>

        

        <button onClick={() => setShow(show + "/")}>/</button>  

        <button onClick={() => {
            try {
                setShow(eval(show).toString());
                alert(`Result: ${eval(show  )}`);
            } catch (error) {
                setShow("text anything");
            }
        }}> = </button>

        



    </div>
    
       
    
    </>
   
  )
}

export default App