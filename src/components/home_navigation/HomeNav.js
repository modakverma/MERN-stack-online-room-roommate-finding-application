import React from 'react'
import { Link } from 'react-router-dom'
import './HomeNav.css'
import HomeIcon from '@mui/icons-material/Home';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import SearchIcon from '@mui/icons-material/Search';
import RoofingIcon from '@mui/icons-material/Roofing';

const HomeNav = ({ mode }) => {
  return (
    <div className='home-nav-container'
      style={{
        backgroundColor: !mode ? "#fff" : "#555763D6",
        color: !mode ? "black" : "#838485"
      }}
    >
      <ul>
        <li>
          <Link to='/'
            style={{
              color: mode && "#D3DEE6FF"
            }}
          >
            <HomeIcon />
            Home
          </Link>
        </li>
        <li>
          <Link to='/rooms'
            style={{
              color: mode && "#D3DEE6FF"
            }}
          >
            <RoofingIcon/>
            Rooms
          </Link>
        </li>
        <li>
          <Link to='/roommates'
            style={{
              color: mode && "#D3DEE6FF"
            }}
          >
            <FaceRetouchingNaturalIcon/>
            Roommates
          </Link>
        </li>
        <li>
          <Link to='/search'
            style={{
              color: mode && "#D3DEE6FF"
            }}
          >
            <SearchIcon />
            Search
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default HomeNav
