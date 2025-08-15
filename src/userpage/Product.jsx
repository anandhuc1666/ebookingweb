import React, { useEffect, useState } from 'react';
import './Product.css';
import { useLocation, useNavigate, Link, useParams } from "react-router-dom";
import axios from 'axios';

function Product() {
  const[Pro,setPro]=useState({})
  let{Product}=useParams()
  const navigate = useNavigate();


useEffect(()=>{
   axios.get(`http://localhost:5000/books/${Product}`)
   .then(res=>setPro(res.data))
   .catch(err=>console.log(err))
},[])
  

  return (
    <div className='Prodect-lists'>
      <div className="Prodect-box">
        <div className="Pro-box1">
          <img src={Pro.image} alt={Pro.BookName} className='Prodect-img' />
        </div>
        <div className="details-box">
          <div className="Pro">
            <h5>Book:<span className='span'> {Pro.BookName}</span></h5>
          </div>
          <div className="Pro">
            <h5>Author:<span className='span'> {Pro.Auther}</span></h5>
          </div>
          <div className="Pro">
            <h5>Language:<span className='span'> {Pro.language}</span></h5>
          </div>
          <div className="Pro">
            <h5>Price:<span className='span' style={{ fontSize: 20 }}>{Pro.Price}</span></h5>
          </div>
          <div className="Pro-list">
            <h6 style={{ fontSize: 20, textAlign: 'justify' }}>{Pro.discription}</h6>
          </div>
          <div className="product-but">
            <button onClick={() => navigate(-1)} className='but-product' style={{ marginLeft: -60, backgroundColor: '#0f0e0e' }}>Close</button>
            <button className='but-product' style={{ marginLeft: 100, backgroundColor: 'gray' }} on>CART</button>
          <Link to={'/Orders'}><button className='but-product' style={{ backgroundColor: 'orange' }}>BUY</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
