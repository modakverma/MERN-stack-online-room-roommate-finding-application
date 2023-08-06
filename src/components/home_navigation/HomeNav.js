import React from 'react'
import { Link } from 'react-router-dom'
import './HomeNav.css'
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import SearchIcon from '@mui/icons-material/Search';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

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
          <Link to='/community'
            style={{
              color: mode && "#D3DEE6FF"
            }}
          >
            <GroupsIcon />
            Community
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
        <li>
          <Link to='/courses'
            style={{
              color: mode && "#D3DEE6FF"
            }}
          >
            <VideoLibraryIcon />
            Courses
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default HomeNav
