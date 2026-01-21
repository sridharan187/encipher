import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Car from './components/Car';
import Garage from './components/Garage';
import Hello  from './components/Hello';
import Welcome from './components/Welcome';
import Parent from './components/Parent';
import User from './components/User';
import Admin from './components/Admin';

function Sum(){
  return (
    <h3>{10+40}</h3>
  )
}



function Sri(){
  return (
    <>
    <h2> This is SRI </h2>
    <Welcome />

    </>
    
  )
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <>

      <App />
      <Sri />
      <Hello />
      {/* <Love /> */}
      <Parent />
      <User />
      <Sum />
     
      <Garage />
      <Admin />
    </>
   
  </React.StrictMode> 
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
