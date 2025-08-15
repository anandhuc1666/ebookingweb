import React, { useEffect, useState } from 'react'
import './Cart.css'
import axios from 'axios'
import { Link } from 'react-router-dom'



function Cart() {
    //    const[order,setOrder]=useState({})
    const [cart, setCart] = useState([])
    const [prodata, setProdata] = useState([])

    const user = JSON.parse(localStorage.getItem("user"));
    useEffect(() => {
        if (user && user.id) {
            calldata(user)
        }
    }, [user.id])
    const calldata = (user) => {
        console.log(user.id)
        axios.get(`http://localhost:5000/carts?userid=${user.id}`)
            .then((res) => setCart(res.data))
            .catch(err => console.log('carts not get data 404', err))
    }
    const removeItem = (id) => {
        axios.delete(`http://localhost:5000/carts/${prodata.id}`)
    }
    const Order = (id) => {
    //we can add the if satatement on there for the cheking the product on available or not
            axios.post('http://localhost:5000/orders',{...id, userid: user.id})
                .then((res) => {
                    // alert('ready to buy', res)
                    console.log(res)
                })
                .catch(err => err)


    }
    return (
        <div className='Cart'>
            <div className="Cart-list">
                <h1 style={{ textAlign: 'center' }}>YOUR CARTS</h1>
                <div className="prodect-cart-list">
                    <img src={prodata.image} alt="" style={{ width: 115 }} />
                    <div className="Book-Cart-name">

                        <h4><strong>BookName: </strong> {prodata.BookName}</h4>
                        <p> <strong>Auther: </strong>{prodata.Auther}</p>
                        <h2 style={{ color: 'red' }}><strong style={{ color: 'black' }}>Price: </strong> {prodata.Price}</h2>
                        <p> <strong>Language:</strong> {prodata.language}</p>
                    </div>
                    <div className="user-revew" style={{ marginLeft: 50, padding: 20 }}>
                        <h5>{prodata.s}  ⭐ <br /> </h5>
                        <p>Scrore</p><br />
                        <h4>{prodata.c} 👤 </h4>
                        <p>Customer</p>
                    </div>
                    <div className="cart-buy">

                        <button style={{ width: 100, height: 40 }} onClick={() => removeItem(prodata.id)}>REMOVE</button>
                        <Link to={'/Orders'}><button style={{ width: 100, height: 40, backgroundColor: 'orange' }} onClick={() => Order(prodata)}>BUY</button></Link>
                       
                    </div>

                </div>
                <div className="prodect-cart-lists-books">
                    {
                        cart.map((find) => (
                            <div className="prodect-cart-lists" key={find.id}>
                                <img src={find.image} alt="" style={{ width: 100 }} onClick={() => setProdata(find)} />
                                <div className="Book-Cart-names">
                                    <h4>BookName:<br />  {find.BookName} </h4>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart