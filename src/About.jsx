import React from 'react'
import logo from './login/imagelogin/logo.png'
import './About.css'


function About() {
    return (
        <div className='About' style={{ width: 1520, height: 620, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor:'#eee' }}>
            <div className="About-box" style={{ width: 800, height: 500,textAlign:'center',background:'#eee',borderRadius:30,padding:30,boxSizing:'border-box' }}>
                <img src={logo} alt="" style={{width:200,}}/>
                <h1> About Shell</h1>
                <br />
                <h3>Welcome to Shell — your personal gateway to the world of books 📚</h3>
                <br />
                <div className="About-line" style={{width:750,height:2,backgroundColor:'black'}}></div><br />
                <p>We believe that reading is more than just a habit — it’s a journey, an escape, and a way to grow. Shell is designed to bring you famous books tailored to your unique preferences.
                    Whether you’re a passionate reader or just starting your reading journey, our platform helps you discover books that match your interests 📖. From timeless classics to trending bestsellers, Shell curates stories that speak to you, so you can spend less time searching and more time reading.
                    At Shell, we’re on a mission to make reading an enjoyable part of everyday life — because the right book can change everything.

                </p>
            </div>
        </div>
    )
}

export default About