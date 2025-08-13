import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Nav from './nav/Nav.jsx'
import Login from './login/Login.jsx'
import Home from './Home.jsx'
import Content from './content/Content.jsx'
import UserAcct from './userpage/UserAcct.jsx'
import Product from './userpage/Product.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <StrictMode>
      
      <App />
      
    </StrictMode>
  </BrowserRouter>
)
