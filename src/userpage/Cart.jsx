import React, { useEffect, useState } from 'react'
import './Cart.css'
import axios from 'axios'



function Cart() {

    const [prodectcart, setprodectcart] = useState([])
    const[prodata,setProdata]=useState([])

    const user = JSON.parse(localStorage.getItem("user"));
    useEffect(() => {
        try {
            axios.get(`http://localhost:5000/users/${user.id}`)
                .then(result => {
                    setprodectcart(result.data.cart)
                    console.log(result.data.cart)

                })
        } catch (error) {
            console.log(error)
        }
    }, [])
    return (
        <div className='Cart'>
            <div className="Cart-list">
                <h1 style={{ textAlign: 'center' }}>YOUR CARTS</h1>
                <div className="prodect-cart-list">
                    <img src={prodata.image} alt="" style={{ width: 115 }} />
                    <div className="Book-Cart-name">
                       
                        <h4><strong>BookName: </strong> {prodata.BookName}</h4>
                        <p> <strong>Auther: </strong>{prodata.Auther}</p>
                        <h2 style={{color:'red'}}><strong style={{color:'black'}}>Price: </strong> {prodata.Price}</h2>
                        <p> <strong>Language:</strong> {prodata.language}</p>
                    </div>
                </div>
                <div className="prodect-cart-lists-books">
                    {
                        prodectcart && [...prodectcart].map((find) => (
                            <div className="prodect-cart-lists" key={find.id}>
                                <img src={find.image} alt="" style={{ width: 100 }} onClick={()=>setProdata(find)}/>
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