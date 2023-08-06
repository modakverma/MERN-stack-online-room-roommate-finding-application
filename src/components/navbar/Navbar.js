import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const Navbar = ({ handleMode }) => {
  const navigate = useNavigate();

  const [toggle, setToggle] = useState(false);
  const [notify,setNotify] = useState(false);

  const toggleMode = () => {
    if (toggle === true) {
      setToggle(false);
      handleMode(false);
    }
    else {
      handleMode(true);
      setToggle(true);
    }
  }
  const showAlert =()=>{
  setTimeout(()=>{
     setNotify(true)
  },2700)
  }
  useEffect(()=>{
    showAlert();
  },[])

  return (
    <div className='nav-bar'
      style={{
        backgroundColor: !toggle ? "#fff" : "#1D242B",
        color: !toggle ? "black" : "#838485",
        borderBottom: toggle && '1px solid #8B8FA3E0'
      }}
    >
      <ul className='nav-bar-items'>
        <li 
        onClick={()=>{
          navigate('/')
        }}
        >
          <img src="/images/logo.png" alt="" />
          <h2 class="header_logo-text"
            style={{
              color: toggle && 'tomato',
            }}
          >plutonn</h2>
        </li>
        <li>
          <span>Community-Posts</span>
        </li>
        <li>
          <span className="bell-icon">
            <div onClick={toggleMode}>
              <Brightness4Icon className='night-mode-toggle' />

            </div>
            <NotificationsNoneIcon />
          </span>
            {
              notify && !toggle && 
              <div className='notify-back'
              onClick={()=>{
                setNotify(false)
               }}
              >
              <ul className='latest-update-notification'>
                 Do check out this newly added feature!
                 <button
                 onClick={()=>{
                  setNotify(false)
                 }}
                 >
                  OK
                 </button>
              </ul>
              </div>
            }
          <span className='user-profile'>
            <Link to='/profile'>
              <img src="/images/profile.png" alt=""
                style={{
                  backgroundColor: toggle && 'tomato',
                  boxShadow: 'none'
                }}
              />
            </Link>
          </span>
        </li>

      </ul>
    </div>
  )
}

export default Navbar
