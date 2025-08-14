import React, { useEffect, useState } from 'react'
import './Cart.css'
import axios from 'axios'



function Cart() {

   const [cart, setCart] = useState([])
    const[prodata,setProdata]=useState([])

    const user = JSON.parse(localStorage.getItem("user"));
    useEffect(() => {
        if(user && user.id){
            calldata()
        }
    }, [user.id])
    const calldata =()=>{
         axios.get("http://localhost:5000/carts")
         .then((res)=>setCart(res.data))
         .catch(err=> console.log('carts not get data 404',err))
    }
    const removeItem=(id)=>{
        axios.delete(`http://localhost:5000/carts/${id}`)
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
                        <h2 style={{color:'red'}}><strong style={{color:'black'}}>Price: </strong> {prodata.Price}</h2>
                        <p> <strong>Language:</strong> {prodata.language}</p>
                    </div>
                    <div className="user-revew" style={{marginLeft:50,padding:20}}>
                        <h5>{prodata.s}  ⭐ <br/> </h5>
                        <p>Scrore</p><br />
                        <h4>{prodata.c} 👤 </h4>
                        <p>Customer</p>
                    </div>
                    <div className="cart-buy">
                            
                             <button style={{width:100,height:40}} onClick={() => removeItem(e.id)}>REMOVE</button>
                              <button style={{width:100,height:40,backgroundColor:'orange'}}>BUY</button>
                    </div>
                   
                </div>
                <div className="prodect-cart-lists-books">
                    {
                        cart.map((find) => (
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