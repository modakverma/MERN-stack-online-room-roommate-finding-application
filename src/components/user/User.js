import React, { useState,useEffect } from 'react'
import './User.css'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import BaseModal from '../../pages/Auth/BaseModal';
import { useNavigate } from 'react-router-dom';

const User = ({ mode }) => {
  const [isModalVisible,setIsModalVisible] = useState(false);
  const [userToken,setUserToken] = useState('');
  const toggleModal = ()=>{
    setIsModalVisible(visibility=>!visibility);
  }

  const navigate = useNavigate();
  const [userInfo,setUserInfo] = useState(null);

  const handleLogout=async()=>{
    localStorage.setItem('userInfo',null);
  }

  const callAboutPage = async () => {
    try {
          const config = {
            headers: {
              'Authorization': `Bearer ${userToken}`,
            },
          };
          const response = await fetch('http://localhost:4000/api/auth/about', config);
          const data = await response.json();
          setUserInfo(data.user)
        } catch (error) {
      console.log(error);
      navigate('/');
    }
  };


  useEffect(() => {
    var userInfo = JSON.parse(localStorage.getItem('userInfo'));
    setUserToken(userInfo? userInfo.token: null);
    callAboutPage();
  }, [userToken,handleLogout]);

  return (
   userInfo?<div>
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
          color: mode && '#2E49E8',
        }}
      >
        <span className="emoji-image" >
        {
         userInfo.profileImage ? <img src={userInfo.profileImage.url} alt={userInfo.profileImage.public_id} />:
         <img src='/images/user.png'/> 
        }
        </span>

      </div>

      <div className="user-details">
        <span
          style={{
            color: mode && '#90a1fe',
          }}
        >{userInfo.username}</span>
        <Link to="/profile"
          style={{
            color: mode && "#D3DEE6FF"
          }}
        >{userInfo.email}</Link>
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
        onClick={handleLogout}
        >
          <LogoutIcon/>
          Logout
        </button>
      </div>
    </section>
    </div>
    :
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
        <span className="emoji-image" >
          <img src="/images/kiss.png" alt="" />
        </span>

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
          Login
        </button>
      </div>
    </section>
      <BaseModal isModalVisible={isModalVisible} onBackdropClick={toggleModal}/>
    </>
  )
}
export default User