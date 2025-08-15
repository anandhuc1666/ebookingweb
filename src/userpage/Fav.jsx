import React, { useEffect, useState } from 'react';
import './Fav.css';
import axios from 'axios';

function Fav() {
 const [fav, setFav] = useState([]);
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    if (user && user.id) {
      fetchFav();
    }
  }, [user.id]);

  const fetchFav = () => {
    axios.get("http://localhost:5000/fav")
      .then((res) => setFav(res.data))
      .catch(err => console.log('fav 404', err));
  };

  const removeItem = (id) => {
    axios.delete(`http://localhost:5000/fav/${id}`)
      .then(() => {
        fetchFav();
        alert('Removed from favorites 🤥');
      })
      .catch(err => console.log('fav delete error', err));
  };


 
  

  // const addCart = (item) => {
  //   axios.get(`http://localhost:5000/carts?userid=${user.id}&bookId=${item.id}`)
  //     .then((res) => {
  //       if (res.data.length > 0) {
  //         console.log(res)                        //if state ment have the issues on i find it...
  //         alert('Already in your cart');
  //       } else {
  //         axios.post("http://localhost:5000/carts", { ...item, userid: user.id })
  //           .then(() => alert("Added to cart"))
  //           .catch(err => console.log('cart post error', err));
  //       }
  //     })
  //     .catch(err => console.log('cart check error', err));
  // };
const addCart = (item) => {
    axios.post("http://localhost:5000/carts", { ...item, userid: user.id })
            .then(() => alert("Added to cart"))
            .catch(err => console.log('cart post error', err));
 };
  return (
    <div className='Fav'>
      <div className="Fav-data">
        {fav.map((e, i) => (
          <div className="Fav-data-list" key={i}>
            <img src={e.image} alt="" style={{ width: 80, height: 100 }} />
            <div className="Fav-details">
              <h5>BOOK NAME: <samp style={{ color: 'black' }}>{e.BookName}</samp></h5>
              <p>WRITER: <samp style={{ color: 'black' }}>{e.Auther}</samp> </p>
              <p>PRICE: <samp style={{ color: 'black' }}>{e.Price}</samp></p>
            </div>
            <div className="Fav-bts">
              <button style={{ width: 60, height: 30, background: 'gray', border: 'none' }} onClick={() => removeItem(e.id)}>REMOVE</button>
              <button style={{ width: 60, height: 30, background: 'orange', border: 'none' }} onClick={() => addCart(e)} >CART</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fav;
