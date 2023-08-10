import React, { useState } from 'react';
import './Auth.css'
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PhotoIcon from '@mui/icons-material/Photo';

import axios from 'axios';

const avatars = [
  {
    avatar:'/images/avatars/avatar1.jpg'
  },
  {
    avatar:'/images/avatars/avatar2.jpg'
  },
  {
    avatar:'/images/avatars/avatar3.jpg'
  },
  {
    avatar:'/images/avatars/avatar4.jpg'
  },
  {
    avatar:'/images/avatars/avatar5.jpg'
  },
  {
    avatar:'/images/avatars/avatar7.jpg'
  },
  {
    avatar:'/images/avatars/avatar8.jpg'
  },
  {
    avatar:'/images/avatars/avatar9.jpg'
  },
]

const Login = ({onBackdropClick}) => {

  const [username, setUsername] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage,setProfileImage] = useState("/images/user.png");

const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/auth/register', {
        username,
        contact,
        email,
        password,
        profileImage
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      );
      alert('Register Successful :)')
      console.log('Registration successful');
      onBackdropClick()
    } catch (error) {
      alert('Failed to Register! ')
      console.error('Error registering:', error.response.data.message);
    }
};


const handleLogin = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/auth/login', {
        username,
        email,
        password,
      });
      const token = response.data.token;
      onBackdropClick();
      console.log('Login successful, token:', token);
    } catch (error) {
      console.error('Error logging in:', error.response.data.message);
    }
  };


  const [toggle,setToggle] = useState(true);
    const handleClick=()=>{
       setToggle(!toggle);
    }
    return (   
    <>
    
    <form
    onSubmit={handleLogin}
    style={{
      display:toggle?'flex':'none'
    }}
    className="login-container">
    <div className='inner-contaier-signup'>
        <div>
          <label htmlFor="username">username</label>
          <div>
          <PersonIcon/>
          <input type="text"
          placeholder='Usename'
          onChange={(e)=>setUsername(e.target.value)}
          />
          </div>
        </div>

        <div>
          <label htmlFor="email">email</label>
          <div>
          <MailIcon/>
          <input type='email'
          placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)}
          />
          </div>
        </div>
          
        <div>
          <label htmlFor="passsord">password</label>
          <div>
          <VpnKeyIcon/>
          <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          />
          </div>
        </div>

        <div className='login-btn'>
            <button type='submit'>
                LOGIN
            </button>
        </div>

        <div className='member-or-not'>
            <span>Not a member?</span><span
            onClick={handleClick}
            >Register</span>
        </div>
</div>

        <div className="login-img">
            <img src="/images/login-secure.jpg" alt="" />
        </div>

</form>


{/* ======= register ====== */}

<form 
onSubmit={handleRegister}
style={{
  display:toggle?'none':'flex'
}}
className="login-container register-container">

    <div>
        <div>
          <label htmlFor="username">Name</label>
          <div>
          <PersonIcon/>
          <input type="text" 
          required
          placeholder='Username' 
          onChange={(e)=>setUsername(e.target.value)}
          />
          </div>
        </div>

        <div>
          <label htmlFor="username">contact</label>
          <div>
          <PhoneIcon/>
          <input type='number' 
          placeholder='+91' 
          onChange={(e)=>{
            setContact(e.target.value)
          }}
          />
          </div>
        </div>


        <div>
          <label htmlFor="email" placeholder='example@gmail.com'>email</label>
          <div>
          <MailIcon/>
          <input type='email' 
          placeholder='Email'
          required
          onChange={(e)=>setEmail(e.target.value)}
          />
          </div>
        </div>
          
        <div>
          <label htmlFor="passsord">password</label>
          <div>
          <VpnKeyIcon/>
          <input
          placeholder='Password'
          type="password"
          required
          onChange={(e)=>setPassword(e.target.value)}
          />
          </div>
        </div>

        <div className='login-btn'>
            <button
            type='submit'
            >
                REGISTER
            </button>
        </div>

        <div className='member-or-not'>
            <span>Already a member?</span>
            <span
            onClick={handleClick}
            >Login
            </span>
        </div>
      </div>

        <div className="register-img">
            <img src={profileImage} alt="" />
            <div className="choose-profile">
                 <div className="choose-avatar">
                    <label htmlFor="avatar">
                      Choose Avarat
                    </label>
                    <div className="avatar-section">
                      <ul>
                      {
                        avatars.map((item)=>(
                          <li onClick={()=>{
                            setProfileImage(item.avatar)
                          }}
                          >
                            <img src={item.avatar} alt="" />
                          </li>
                        ))
                      }
                      </ul>
                    </div>
                 </div>
                 <span className='or-separator'>OR</span>
                 <div className="choose-repo">
                  <label htmlFor="inputTag">Select Image
                     <input
                     name='profileImage'
                     accept='images/*'
                     onChange={(e)=>{
                      if(e.target.files && e.target.files[0])
                        setProfileImage(URL.createObjectURL(e.target.files[0]))
                      // setProfileImage(e.target.files[0])
                     }}
                     id='inputTag' type="file" />
                  <PhotoIcon/>
                  </label>
                 </div>
            </div>
        </div>

<div className='register-back-arrow'
  onClick={()=>{
    setToggle(true)
  }}
>
  <ArrowBackIosIcon />
</div>
</form>
    </>
        
      );
};


export default Login;