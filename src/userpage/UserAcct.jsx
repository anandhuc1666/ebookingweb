import React, { useEffect, useState } from 'react';
import './UserAcct.css';
import logo from '../login/imagelogin/logo.png';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function UserAcct() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [item, setItem] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("user"));
    if (!data) {
      navigate("/Login");
    } else {
      setUser(data);
    }
  }, [navigate]);
  useEffect(() => {
    if (user && user.id) {
      axios.patch(`http://localhost:5000/users/${user.id}`, {
        cart: [...(user.cart || [])]
      })
        .then(res => setItem(res.data.cart || []))
        .catch(err => {
          console.log('404', err);
        });
    }
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/Login");
  };

  const removeItem = async (productId) => {
  try {
    // Remove from state
    const updatedCart = item.filter(c => c.id !== productId);
    setItem(updatedCart);

    // Update user cart in JSON server
    await axios.patch(`http://localhost:5000/users/${user.id}`, {
      cart: updatedCart
    });

    // Also update localStorage so UI stays in sync after reload
    const updatedUser = { ...user, cart: updatedCart };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
  } catch (err) {
    console.error("Error removing item:", err);
  }
};





  return (
    <div className="UserAcct">
      <div className="userarea">
        <div className="user-acct">
          <img src={logo} alt="" style={{ width: 100, height: 100, borderRadius: "100px" }} />
          <h1>{user.firstName}  {user.lastName}</h1>
          <h3>{user.number}</h3>
          <h5>{user.email}</h5>
          <button className="user-logout" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <div className="UserProdect-area">
        <div className="UserProdect">
          {item.map((filter, index) => (
            <div key={index}>
              <div className="under-line"></div>
              <div className="prodect-list">
                <div className="div-prodect-img" style={{ padding: 10, display: "flex", alignItems: "center", height: 200 }}>
                  <img src={filter.image} alt="" style={{ width: 90, height: 150, marginLeft: 20 }} />
                </div>

                <div className="div-prodect-details">
                  <h3>book: {filter.BookName}</h3>
                  <h5>Author: {filter.Auther}</h5>
                  <h5>Language: {filter.language}</h5>
                  <p>price: {filter.Price}</p>
                </div>
                 <button onClick={() => removeItem(filter.id)}>Remove</button>
                <div className="div-prodect-count-price">
                  <h1>{filter.Price}</h1>
                  <br />
                  <button className="div-prodect-count-price-but">BUY</button>
                </div>
              </div>
              <div className="under-line"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserAcct;
