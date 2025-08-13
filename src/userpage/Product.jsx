import React, { useState } from 'react';
import './Product.css';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

function Product() {
  const location = useLocation();
  const navigate = useNavigate();
  const Product = location.state?.Product; // ✅ fixed key name

  if (!Product) {
    return <h2>No product selected</h2>;
  }

  // Simulate logged-in user (from localStorage)
  const user = JSON.parse(localStorage.getItem("user")); // { id, firstName, ..., cart: [] }

  const cart = () => {
    if (!user) {
      alert("Please log in first.");
      return;
    }

    // Send request to backend to update the user's cart
    axios.patch(`http://localhost:5000/users/${user.id}`, {
      cart: [...(user.cart || []), Product]
    })
      .then((res) => {
        console.log("Cart updated", res.data);

        // Update local storage user info with new cart
        localStorage.setItem("user", JSON.stringify(res.data));

        alert("Item added to cart!");
      })
      .catch((err) => {
        console.error("Error adding to cart", err);
      });
  };

  return (
    <div className='Prodect-lists'>
      <div className="Prodect-box">
        <div className="Pro-box1">
          <img src={Product.image} alt={Product.BookName} className='Prodect-img' />
        </div>
        <div className="details-box">
          <div className="Pro">
            <h5>Book:<span className='span'> {Product.BookName}</span></h5>
          </div>
          <div className="Pro">
            <h5>Author:<span className='span'> {Product.Auther}</span></h5>
          </div>
          <div className="Pro">
            <h5>Language:<span className='span'> {Product.language}</span></h5>
          </div>
          <div className="Pro">
            <h5>Price:<span className='span' style={{ fontSize: 20 }}>{Product.Price}</span></h5>
          </div>
          <div className="Pro-list">
            <h6 style={{ fontSize: 20, textAlign: 'justify' }}>{Product.discription}</h6>
          </div>
          <div className="product-but">
            <button onClick={() => navigate(-1)} className='but-product' style={{ marginLeft: -60, backgroundColor: '#0f0e0e' }}>Close</button>
            <button className='but-product' style={{ marginLeft: 100, backgroundColor: 'gray' }} onClick={cart}>CART</button>
            <button className='but-product' style={{ backgroundColor: 'orange' }}>BUY</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
