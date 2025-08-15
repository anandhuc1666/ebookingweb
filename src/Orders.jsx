import React, { useState, useEffect } from 'react';
import Check from './Check';
import './Orders.css';
import axios from 'axios';

function Orders() {
  const [counts, setCounts] = useState({});
  const [item, setItem] = useState([]);
  const[check,setCheck]=useState(false)
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user?.id) {
      fetchOrders();
    }
  }, []);

  const fetchOrders = () => {
    axios.get(`http://localhost:5000/orders?userid=${user.id}`)
      .then((res) => setItem(res.data))
      .catch(err => console.log('orders fetch error', err));
  };

  const Remove = (id) => {
    axios.delete(`http://localhost:5000/orders/${id}`)
      .then(() => {
        fetchOrders();
        alert("Removed your order");
      })
      .catch(err => console.log("delete error", err));
  };

  const increase = (id) => {
    setCounts(prev => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  const decrease = (id) => {
    setCounts(prev => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1
    }));
  };

  const totalPrice = item.reduce((acc, prod) => {
    const qty = counts[prod.id] || 1;
    return acc + prod.Price * qty;
  }, 1);

  return (
    <div className='Orders'>
      <div className="User-orders-data">
        <div className="text-top">
          <h3 className='txt'>Checkout</h3>
          <h4 className='txt'>Shipping information</h4>
        </div>
        <div className="User-orders-data-list">
          <div className="data-list">
            <h5>Full Name</h5>
            <input type="text" placeholder='Enter full name' className='data-list-input' />
          </div>
          <div className="data-list">
            <h5>Email address</h5>
            <input type="email" placeholder='Enter email address' className='data-list-input' />
            <p>E-mail not valid?</p>
          </div>
          <div className="data-list">
            <h5>Phone number</h5>
            <input type="number" placeholder='Enter phone number' className='data-list-input' />
            <p>Number not valid?</p>
          </div>
          <div className="data-list">
            <h5>State</h5>
            <select className='data-list-input'>
              <option value="">Choose state</option>
              <option value="Kerala">Kerala</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Tamilnadu">Tamilnadu</option>
            </select>
          </div>
          <div className="data-list" style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
            <div className="City">
              <h5>City</h5>
              <input type="text" className='small-box' placeholder='City' />
            </div>
            <div className="State">
              <h5>Pincode</h5>
              <input type="number" className='small-box' placeholder='Pincode' />
            </div>
          </div>
          <input type="checkbox" className='checkBox' style={{ marginTop: 10 }} />
          <p>I have read and agree to the Terms Condition.</p>
        </div>
      </div>

      {/* Products section */}
      <div className="User-prodect-data">
        <div className="User-prodect-items">
          <div className="User-prodect-title">
            <h4>Preview your cart</h4>
          </div>

          <div className="product-list-show-list">
            {item.map((filter, index) => {
              const qty = counts[filter.id] || 1;
              console.log(counts)
              const itemTotal = Number(filter.Price) * Number(qty);
              return (
                <div className="prodect-show" key={index}>
                  <img
                    src={filter.image}
                    alt=""
                    style={{ width: 60, height: 100, backgroundColor: '#eee' }}
                  />
                  <div className="data-prp">
                    <h5>Name: {filter.BookName}</h5>
                    <p>Price: {filter.Price}</p>
                  </div>
                  <div className="qaunt-count">
                    <button className='count-but' onClick={() => decrease(filter.id)}>-</button>
                    <h3>{qty}</h3>
                    <button className='count-but' onClick={() => increase(filter.id)}>+</button>
                  </div>
                  <h4 style={{ marginLeft: -50 }}>Price: $ {itemTotal}</h4>
                  <button className='order-re-but' onClick={() => Remove(filter.id)}>REMOVE</button>
                </div>
              );
            })}
          </div>

          <div className="roduct-list-show-list-total">
            <h1 style={{ position: 'absolute', marginTop: -20, marginLeft: 500 }}>
              Total: {totalPrice}
            </h1>
          </div>
          <div className="line"></div>
          <div className="User-prodect-order">
            <button className='Order-but' onClick={()=>setCheck(!check)}>Pay Now</button>
            {check ? <Check/>: null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
