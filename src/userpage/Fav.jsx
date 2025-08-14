import React, { useEffect, useState } from 'react';
import './Fav.css';
import axios from 'axios';

function Fav() {
  const [fav, setFav] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user && user.id) {
      calldata()
    }
  }, [user.id]);
  const calldata = () => {
    axios.get("http://localhost:5000/fav")
      .then((res) => setFav(res.data))
      .catch(err => console.log('fav 404', err));
  }
  const removeItem = (id) => {
    axios.delete(`http://localhost:5000/fav/${id}`)
      .then(
        calldata()
      )
      .catch(err => console.log('fav 404', err));
  };
  const addCart = (add) => {
    console.log()
    // axios.post(`http://localhost:5000/users/cart${add}`)
    axios.post(`http://localhost:5000/carts`,add)
    .then(
          calldata()
    )
    .catch(err=> console.log('not add 404',err))
  }


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
