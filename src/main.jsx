import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './components/Login.jsx'
import Hide from './components/Hide.jsx'
import Userlogin from './components/Userlogin.jsx'
import Map from './components/Map.jsx'
import Studentlist from './components/Studentlist.jsx'
import Text from './components/Text.jsx'
import Input from './components/Input.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

    <Login />
    <Hide />
    <Userlogin /> 
    <Map />
    <Studentlist />
    <Text />
    <Input />

  </StrictMode>,
)
