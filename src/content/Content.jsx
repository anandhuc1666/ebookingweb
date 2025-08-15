import React, { useEffect, useState } from 'react'
import './Content.css'
import axios from 'axios'
import booksbold from './booksbold.svg'
import bookshelf from './bookshelf.svg'
import Product from '../userpage/Product'

import { useNavigate,Link } from "react-router-dom";

function Content() {
  const [data, setState] = useState([]);
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("all"); 

  const fav = (fil) => {
  let user = JSON.parse(localStorage.getItem("user") || "{}");
  let userid = user.id;

  if (!userid) {
    alert("Please log in first");
    return;
  }

  // Check if this book is already in favorites for this user
  axios.get(`http://localhost:5000/fav?userid=${userid}&id=${fil.id}`)
    .then((res) => {
      if (res.data.length > 0) {
        alert("Already in favorites");
      } else {
        axios.post("http://localhost:5000/fav", { ...fil, userid })
          .then(() => alert("Added to favorites"))
          .catch(err => console.log("Error adding favorite", err));
      }
    })
    .catch(err => console.log("Error checking favorites", err));
};

   
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/books")
      .then((ress) => setState(ress.data))
      .catch((err) => console.log("server 404", err));
  }, []);

  const filteredData = data.filter((fil) => {
    const matchesSearch = fil.BookName.toLowerCase().includes(search.toLowerCase());
    const matchesLanguage = language === "all" || fil.Language?.toLowerCase() === language.toLowerCase();
    return matchesSearch && matchesLanguage;
  });


  return (
    <div className="Content-box">
      {/* Search and Language Filters */}
      <img src={ bookshelf} alt="" className=' bookshelf'/>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search your product"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            flex: 1
          
          }}
          className='navSearch '
        />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={{
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        >
          <option value="all">All Languages</option>
          <option value="malayalam">Malayalam</option>
          <option value="english">English</option>
        </select>
      </div>

      {/* Books List */}
      <div className="Books-lists-box">
        {filteredData.map((fil, index) => (
          <div key={index} className="Book-list" style={{ width: 200, height: 350 }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
              alt="favorite"
              className="icon-favorite"
              style={{
                width: 20,
                height: 20,
                position: "absolute",
                margin: -20,
                marginLeft: 130
              }}
              onClick={()=>fav(fil)}
            />

            <img
              src={fil.image}
              alt=""
              style={{ width: 150, height: 200, borderRadius: 10 }}
            />
            <h3 style={{ fontSize: 20 }}>{fil.BookName.toLowerCase()}</h3>
            <h4>{fil.Language}</h4>
            <h2>{fil.Price}</h2>
           
            <Link to={`/Books/${fil.id}`}><button style={{background: '#0f0e0e',color: '#fff',padding: 5,borderRadius: 20}}>   VIEW MORE</button></Link>
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;