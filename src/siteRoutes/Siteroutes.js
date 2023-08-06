import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Article from '../components/Article'
import Navbar from '../components/navbar/Navbar'
import LeftSection from '../pages/sections/LeftSection'
import MiddleSection from '../pages/sections/MiddleSection'
import RightSection from '../pages/sections/RightSection'
import Announcement from '../components/Announcement'
import '../pages/Home.css'

const cardArray = [
  {
    id: 1,
    name: "Nutesh Kumar",
    user_imgUrl: "/images/mirror-guy.jpg",
    user_id: "@i_m_nitesh2",
    postData: "🌟 Greetings, Members! 🌟🔥 Introducing our very first challenge! 🔥 Submit your incredible code for this mind-boggling problem and get ready for a chance to be featured with a shoutout on CipherSchools' Instagram page! 📸🎉👉🏼 Q: Given a binary tree, write an efficient algorithm to convert the binary tree into its mirror.#CodeMasters",
    postImage: "	https://d3gmywgj71m21w.cloudfront.net/0183e2ac705ed35aa179f7d5d15fdae5.png",
    likes: 2,
    comments: 0,
  },
  {
    id: 2,
    name: "Nutesh Kumar",
    user_imgUrl: "/images/mirror-guy.jpg",
    user_id: "@i_m_nitesh2",
    postData: "🌟 Greetings, Members! 🌟🔥 Introducing our very first challenge! 🔥 Submit your incredible code for this mind-boggling problem and get ready for a chance to be featured with a shoutout on CipherSchools' Instagram page! 📸🎉👉🏼 Q: Given a binary tree, write an efficient algorithm to convert the binary tree into its mirror.#CodeMasters",
    postImage: "	https://d3gmywgj71m21w.cloudfront.net/0183e2ac705ed35aa179f7d5d15fdae5.png",
    likes: 2,
    comments: 0
  },
  {
    id: 3,
    name: "Nutesh Kumar",
    user_imgUrl: "/images/mirror-guy.jpg",
    user_id: "@i_m_nitesh2",
    postData: "🌟 Greetings, Members! 🌟🔥 Introducing our very first challenge! 🔥 Submit your incredible code for this mind-boggling problem and get ready for a chance to be featured with a shoutout on CipherSchools' Instagram page! 📸🎉👉🏼 Q: Given a binary tree, write an efficient algorithm to convert the binary tree into its mirror.#CodeMasters",
    postImage: "	https://d3gmywgj71m21w.cloudfront.net/0183e2ac705ed35aa179f7d5d15fdae5.png",
    likes: 2,
    comments: 0
  },
  {
    id: 4,
    name: "Nutesh Kumar",
    user_imgUrl: "/images/mirror-guy.jpg",
    user_id: "@i_m_nitesh2",
    postData: "🌟 Greetings, Members! 🌟🔥 Introducing our very first challenge! 🔥 Submit your incredible code for this mind-boggling problem and get ready for a chance to be featured with a shoutout on CipherSchools' Instagram page! 📸🎉👉🏼 Q: Given a binary tree, write an efficient algorithm to convert the binary tree into its mirror.#CodeMasters",
    postImage: "	https://d3gmywgj71m21w.cloudfront.net/0183e2ac705ed35aa179f7d5d15fdae5.png",
    likes: 2,
    comments: 0
  },
]



const Siteroutes = () => {
  const [mode, setMode] = useState(false);
  const handleMode = (mode) => {
    setMode(mode);
  }
  return (
    <BrowserRouter>

      <Navbar handleMode={handleMode} />
      <div className="home-container"
        style={{
          backgroundColor: !mode ? "#fff" : "#40424FFF",
          color: !mode ? "black" : "#838485"
        }}
      >
        <LeftSection mode={mode}/>

      <div className="community_container_outer"
          style={{
            backgroundColor: mode && '#1D242B',
          }}
      >
          <div className='middle-section'>
            <MiddleSection mode={mode} />
            <Routes>
              <Route path='/announcement' element={<Announcement />} />
              <Route path='/posts' element={<Article mode={mode} cardArray={cardArray} />} />
              <Route path='/' element={<div
                style={{ backgroundColor: mode && "#1D242B" }}
              >
                <img src="/images/home-illus.jpg" alt=""
                  style={{
                    backgroundSize: 'cover',
                    width: '100%',
                    height: '100%',
                    mixBlendMode: 'multiply'
                  }}
                />
              </div>} />
            </Routes>
          </div>

          <RightSection mode={mode} />

      </div>

    </div>

    </BrowserRouter>
  )
}

export default Siteroutes
