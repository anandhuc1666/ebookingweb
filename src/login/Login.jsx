import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Login.css'
import siting from './imagelogin/siting.svg'
import logo from '../login/imagelogin/logo.png'
function Login() {
   const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const loginUser = async e => {
    e.preventDefault();
    if(!form.email || !form.password) return
    const res = await axios.get( `http://localhost:5000/users?email=${form.email}&password=${form.password}`);

    if (res.data.length > 0) {
      localStorage.setItem("user", JSON.stringify(res.data[0])); 
      navigate("/");
    } else {
      alert("Invalid credentials");
    }


    }
    return (
        <div className='box'>
            <img src={logo} alt="" style={{ width: 200, height: 200, }} />
            <div className="container">
                <img src={siting} alt="" className='siting' />
                <div className='text-login'>
                    <h1 >Login</h1>
                </div>        
            <form onSubmit={loginUser}>
               <div className='input-box'>
                    <div className='box2'>
                        <input type="email" className='input-login' placeholder='Enter your email:' name='email' onChange={handleChange} />
                    </div>
                    <div className='box2'>
                        <input type="password" className='input-login' placeholder='Enter your password:' name='password' onChange={handleChange} />
                    </div>
                    <div className='box2'>
                        <div className='but-box'>
                        <button type="submit" className='button-login' >Login</button>
                        <Link to={'/Signup'} style={{ textDecoration: 'none' }}><button className='button-login' style={{ textDecoration: 'none' }}>Signup</button></Link>
                      </div>
                    </div>
                </div>
           </form>
               
            </div>
        </div>
    )
}

export default Login