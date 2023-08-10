import React, { useState } from 'react'
import './User.css'
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';
import BaseModal from '../../pages/Auth/BaseModal';

const User = ({ mode }) => {


  const [isModalVisible,setIsModalVisible] = useState(false);
  const toggleModal = ()=>{
    setIsModalVisible(visibility=>!visibility);
  }

  return (
    <>
    <section className='user-section-container'
      style={{
        backgroundColor: !mode ? "#fff" : "#555763D6",
        color: !mode ? "black" : "#838485"
      }}
    >

      <div className="padding-div">
      </div>
      <div className="follow"
        style={{
          color: mode && 'tomato',
        }}
      >
        {/* <span>
          27k
          <label htmlFor=""
            style={{
              color: mode && "#D3DEE6FF"
            }}
          >
            Followers
          </label>
        </span> */}

        <span className="emoji-image" >
          <img src="/images/kiss.png" alt="" />
        </span>
        
{/* 
        <span>
          67
          <label htmlFor=""
            style={{
              color: mode && "#D3DEE6FF"
            }}
          >
            Following
          </label>
        </span> */}

      </div>

      <div className="user-details">
        <span
          style={{
            color: mode && '#90a1fe',
          }}
        >You Haven't Logged In</span>
        <Link to="/profile"
          style={{
            color: mode && "#D3DEE6FF"
          }}
        >Take your usernaem now</Link>
      </div>

      <div className="welcome"
        style={{
          color: mode && "#B5BEC4FF",
          textAlign:'center'
        }}
      >
        <span>Hey! Welcome to RoomSpace</span>
        <span>Share | Connect | Apply.</span>

      </div>
      <div className="post-button">
        <button
        onClick={toggleModal}
        >
          <LoginIcon/>
          {/* <Link to='/profile'>
          Login
          </Link> */}
          Login
        </button>
      </div>
    </section>
      <BaseModal isModalVisible={isModalVisible} onBackdropClick={toggleModal}/>
    </>
  )
}

export default User
