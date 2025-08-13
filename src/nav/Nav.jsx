import React, { useState } from 'react'
import logo from '../login/imagelogin/logo.png'
import account from '../nav/account.png'
import './nav.css'
import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <div className="Navbar">
        <img src={logo} alt="logo" className='logo-nav' />
        <ul style={{ display: 'flex', listStyle: 'none', marginLeft: '40%', }}>
          <Link to={'/'} style={{ textDecoration: "none" }}>  <li className='nav-li'>Home</li></Link>
          <Link to={'/Books'} style={{ textDecoration: "none" }}>  <li className='nav-li'>Books</li></Link>
          <Link to={'/'} style={{ textDecoration: "none" }}><li className='nav-li'>About</li></Link>
        </ul>
        <div className="box-cart-favo">
          <Link to={'/Cart'}> <img src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="addtocart" className="icon-cart" style={{ background: 'none' }}/></Link>
          <img src="https://cdn-icons-png.flaticon.com/512/833/833472.png" alt="favorite" className="icon-favorite" style={{ filter: 'brightness(0) saturate(100%) invert(0)' }} />
          <Link to={'/UserAcct'}><img alt=""/><RiAccountCircleFill size={25} color='#000'/></Link>
        </div>

      </div>
    </div>
  )
}

export default Nav


