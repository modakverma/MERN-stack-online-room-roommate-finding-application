import React, { useState,useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Article from '../components/rooms-related/Article'
import Navbar from '../components/navbar/Navbar'
import LeftSection from '../pages/sections/LeftSection'
import MiddleSection from '../pages/sections/MiddleSection'
import RightSection from '../pages/sections/RightSection'
import Announcement from '../components/rooms-related/Announcement'
import '../pages/Home.css'
import Rooms from '../components/rooms-related/Rooms'
import Roommates from '../components/Roommates'
import BestChoiceRoommate from '../components/BestChoiceRoommate'
import AvailableRoommates from '../components/AvailableRoommates'
import ListRoom from '../components/rooms-related/ListRoom'


const Siteroutes = () => {
  const [mode, setMode] = useState(false);
  const handleMode = (mode) => {
    setMode(mode);
  }

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/rooms')
      .then((response) => response.json())
      .then((data) => setRooms(data))
      .catch((error) => console.error('Error fetching rooms:', error));
  }, []);
  
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
            <Routes>

            <Route path='/rooms' element={<Rooms mode={mode} rooms={rooms}/>} >
                <Route path='best-picks' element={<Announcement mode={mode}/>}/>
                <Route index element={<Article mode={mode} rooms={rooms}/>}/>
            <Route path='list-space' element={<ListRoom mode={mode}/>}/>
            </Route>
            

            <Route path='roommates' element={<Roommates/>}>
                <Route index element={<AvailableRoommates/>}/>
                <Route path='best-picks' element={<BestChoiceRoommate/>}/>
            </Route>

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
