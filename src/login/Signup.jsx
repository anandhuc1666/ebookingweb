import React,{useState} from 'react'
import axios from 'axios'
import signupbg from '../login/imagelogin/registerlady.svg'
import { Link } from 'react-router-dom'
import logo from '../login/imagelogin/logo.png'

function Signup() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    number: "",
    role: "user",
    cart: []
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const registerUser = async (e) => {
    e.preventDefault();

    if (!form.firstName || !form.email || !form.password || !form.number) {
      alert("Please fill all required fields");
      return;
    }

    try {
      await axios.post("http://localhost:5000/users", form);
      alert("Registered successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to register");
    }
    // axios.post("http://localhost:5000/users", form).then((data)=>{
    //     console.log(data)
    // }).catch((e)=>{
    //     console.log(e)
    // })
  };

  return (
    <div>
      <div className="box">
        <img src={logo} alt="" style={{ width: 200, height: 200 }} />
        <div
          className="container"
          style={{
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={signupbg} alt="signuplogo" style={{ width: 200, height: 200 }} />
          <h1>SignUp</h1>

          <form onSubmit={registerUser}>
            <div className="box1" style={{ marginTop: 10, width: 300 }}>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                className="input-login"
                onChange={handleChange}
              />
            </div>
            <div className="box1" style={{ marginTop: 10, width: 300 }}>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                className="input-login"
                onChange={handleChange}
              />
            </div>
            <div className="box1" style={{ marginTop: 10, width: 300 }}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input-login"
                onChange={handleChange}
              />
            </div>
            <div className="box1" style={{ marginTop: 10, width: 300 }}>
              <input
                type="number"
                name="number"
                placeholder="Enter your phone"
                className="input-login"
                onChange={handleChange}
              />
            </div>
            <div className="box1" style={{ marginTop: 10, width: 300 }}>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input-login"
                onChange={handleChange}
              />
            </div>
            <div
              className="box1"
              style={{
                marginTop: 10,
                width: 300,
                marginBottom: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                style={{ marginLeft: "-10px" }}
                className="button-login"
                type="submit"
              >
                Signup
              </button>
              <Link to={"/Login"} style={{ textDecoration: "none" }}>
                <button className="button-login" type="button">
                  Login
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;