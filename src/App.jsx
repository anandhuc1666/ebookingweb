import React, { useEffect, useState } from 'react'
import Login from './login/Login'
import { Route, Routes, useLocation } from 'react-router-dom'
import Signup from './login/Signup'
import Nav from './nav/Nav'
import Home from './Home'
import Content from './content/Content'
import UserAcct from './userpage/UserAcct'
import Product from './userpage/Product'
import Cart from './userpage/Cart'

function App() {
const[nav,setNav]=useState(true)
let location = useLocation()
useEffect(()=>{
  console.log(location)
  if(location.pathname==='/Login'){
    setNav(false)
  }
  else if(location.pathname==='/Signup'){
     setNav(false)
  }
  else{
    setNav(true)
  }
})
  return (
    <div>
{nav && <Nav/>}
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Books' element={<Content/>}/>
  <Route path='/Login' element={<Login/>}/>
  <Route path='/Signup' element={<Signup/>}/>
  <Route path='/UserAcct' element={<UserAcct/>}/>
  <Route path='Product' element={<Product/>}/>
  <Route path='/Cart' element={<Cart/>}/>
</Routes>
    </div>
  )
}

export default App