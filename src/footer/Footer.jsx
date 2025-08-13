import React from 'react'
import './Footer.css'
import logo from '../login/imagelogin/logo.png'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-container">
                <img src={logo} alt="" className='logo-footer' />
                <p style={{position:'absolute',marginTop:150}}>© 2025 shell e-books</p>
                <div className="footer-text">
                 <h3>8700 NW River Park Drive</h3>
                <h3>Parkville, MO</h3>
                <h3>64152</h3>
                <h3>816-741-2000</h3>
                <h3>Shell</h3>
               </div>
            </div>
        </div>
    )
}

export default Footer