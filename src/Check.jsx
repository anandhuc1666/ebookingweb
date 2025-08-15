import React, { useState, useEffect } from 'react';
import './Check.css';
import axios from 'axios';

function Check() {
  const [showCongrats, setShowCongrats] = useState(false);
  const [acc, setAcc] = useState(null); // single object, not array
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    if (user?.id) {
      axios.get(`http://localhost:5000/users/${user.id}`)
        .then(res => setAcc(res.data))
        .catch(err => console.log('User not found', err));
    }
  }, [user?.id]);

  useEffect(() => {
    const showTimer = setTimeout(() => setShowCongrats(true), 1000);
    const hideTimer = setTimeout(() => setShowCongrats(false), 6000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!showCongrats || !acc) {
    return null;
  }

  return (
    <div className='check'>
      <div className="user-check">
        <h1>🎊 Congratulation 🎉</h1><br />
        <h3>Name: {acc.firstName}</h3>
        <h4>Email: {acc.email}</h4>
        <h4>Phone: {acc.number}</h4><br />
        <div className="user-br"></div>
      </div>
    </div>
  );
}

export default Check;
