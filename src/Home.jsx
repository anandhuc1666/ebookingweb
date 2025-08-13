import React from 'react'
import Nav from './nav/Nav'
import { Route, Routes } from 'react-router-dom'
import Content from './content/Content.jsx'
import './Home.css'
import ladyreading from './images/ladyreadingbook (2).svg'
import sitreading from './images/sitereading.svg'
import Footer from './footer/footer.jsx'

function Home() {
  return (
    <div className='Home'>
      <h1 style={{ position: 'absolute', width: 400, color: '#000000ff', margin: 150 }}>"The more that you read, the more things you will know. The more that you learn, the more places you'll go</h1>
      <img src="https://cdn.pixabay.com/photo/2024/03/19/19/08/book-8643905_1280.jpg" alt="" className='home-bg' />
      <div className="home-container">
        <div className="home-content" style={{ padding: 20, display: 'flex', flexDirection: 'column', float: 'left' }}>
          <h3>Famous English Authors and Their Contributions to Literature</h3>
          <p>The vast scope of literature includes entertaining and enlightening works that span numerous geographic locations, cultural traditions and historical periods. Every category presents its own unique flavor and holds strong literary merit, but English literature has long captivated readers with its compelling themes and vivid descriptions.</p>
        </div>
        <div className="home-content">
          <h3>The Foundation of English Literature</h3><br />
          <p>The term “English literature” is often described as the body of works penned by those living in the British Isles — beginning during the 7th century and extending to the present day. The poem Beowulf is often highlighted as the earliest verifiable work of English literature, but it is challenging to date and attribute the works of the 1st millennium.</p>
          <img src={ladyreading} alt="" className='ladyreading' />
        </div>
      </div>
      <div className="home-mide-content">
        <div className="home-content">
          <h3>William Shakespeare and the Elizabethan Era</h3>
          <p>No discussion of famous English authors would be complete without a deep dive into the fascinating life of William Shakespeare. Arguably history’s most famous poet and playwright, Shakespeare deserves credit for creating some of the most iconic characters not only in Elizabethan era literature, but of all time. Many of his concepts and even his phrases remain relevant to this day.Featuring compelling heroines who seek both romance and self-actualization, Jane Austen’s novels are rife with social commentary. She is, perhaps, best known for the relatable novel Pride & Prejudice. This is one of the world’s most consistently popular novels and is believed to have sold over 200 million copies. Pride and Prejudice themes like social class and reputation blend with a page-turning plot to achieve almost universal appeal.</p>
        </div>
        <div className="home-content">
          <h3>The Evolution of the Novel</h3>
          <p>As one of the most significant literary formats of the last few centuries, the novel has the unique power to transport us to different worlds while helping us form close connections with compelling characters.
            While the novel seems like the quintessential form of English literature, its history is rather short compared to English literature as a whole..</p>
        </div>
        <img src={sitreading} alt="" className='sitreading'/>
      </div>
      <Footer />
    </div>
  )
}

export default Home