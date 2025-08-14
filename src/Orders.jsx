import React from 'react'
import { useState,useEffect } from 'react';
import './Orders.css'
import axios from 'axios';

function Orders() {
    const [count,setCount]=useState(0)
    const [item, setItem] = useState([]);
 useEffect(() => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.id) {
    axios.get(`http://localhost:5000/users/${user.id}`)
      .then(res => setItem(res.data.cart || []))
      .catch(err => console.error("Error fetching cart:", err));
  }
}, []);
const handleRemove = (index) => {
  const updatedCart = item.filter((_, i) => i !== index);
  setItem(updatedCart);

  axios.patch(`http://localhost:5000/users/${user.id}`, {
    cart: updatedCart
  });
};
const updateQuantity = (index, change) => {
  const updatedCart = [...item];
  updatedCart[index].quantity = Math.max(1, updatedCart[index].quantity + change);
  setItem(updatedCart);

const totalPrice = item.reduce(
  (sum, product) => sum + (Number(product.Price) || 0) * (product.quantity || 1), 
  0
);
}
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
                        <p>E-mail not valide? </p>
                    </div>
                    <div className="data-list">
                        <h5>Phone number</h5>
                        <input type="number" placeholder='Enter phone number' className='data-list-input' />
                        <p>Number not valid?</p>
                    </div>
                    <div className="data-list">
                        <h5>State</h5>
                        <select name="" id="" className='data-list-input'>
                            <option value="" style={{ backgroundColor: 'blue', color: '#fff' }}>Choose state</option>
                            <option value="">Kerala</option>
                            <option value="">Karnataka</option>
                            <option value="">Tamilnadu</option>
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
                    <p> I have read and agree to the Terms Condition.</p>
                </div>
            </div>
            {/* bottom side for the user checkOut prodect on there */}
            <div className="User-prodect-data">
                <div className="User-prodect-items">
                    <div className="User-prodect-title">
                        <h4>Preview you cart</h4>
                    </div>



                    <div className="product-list-show-list">
{/* totell prodect show on here */}

        {
           item.map((filter, index)=>(
                  <div className="prodect-show" key={index}>
                    <img src={filter.image} alt="" style={{width:60,height:100,backgroundColor:'#eee'}}/>
                    <div className="data-prp">
                    <h5>Name:{filter.BookName}</h5>
                    <p>price:{filter.Price}</p>
                    </div>
                    <div className="qaunt-count">
                        <button className='count-but' onClick={() => setCount(count-1)}>-</button>
                        <h3>{count}</h3>
                        <button className='count-but' onClick={() => setCount(count+1)}>+</button>
                    </div>
                    <h4 style={{marginLeft:-50}}>Price:$ {}</h4>
                    <button className='order-re-but' onClick={() => handleRemove(index)}>REMOVE</button>
                  </div>
            ))
        }
             
                


                    </div>
                    




                    <div className="roduct-list-show-list-total">
                        {/* total prodect items count the total */}

                        <div className="roduct-list-show-list-total-count">
                            <h5></h5>
                        </div>
                        <h1 style={{position:'absolute',marginTop:-20,marginLeft:500}}>Total:</h1>
                    </div>
                     <div className="line"></div>
                    <div className="User-prodect-order">
                        <button className='Order-but'>Play Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders;