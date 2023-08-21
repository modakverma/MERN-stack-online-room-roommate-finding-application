import React, { useState } from 'react';
import './Auth.css'
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PhotoIcon from '@mui/icons-material/Photo';
import axios from 'axios';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const avatars = [
  {
    avatar: '/images/avatars/avatar1.jpg'
  },
  {
    avatar: '/images/avatars/avatar2.jpg'
  },
  {
    avatar: '/images/avatars/avatar3.jpg'
  },
  {
    avatar: '/images/avatars/avatar4.jpg'
  },
  {
    avatar: '/images/avatars/avatar5.jpg'
  },
  {
    avatar: '/images/avatars/avatar7.jpg'
  },
  {
    avatar: '/images/avatars/avatar8.jpg'
  },
  {
    avatar: '/images/avatars/avatar9.jpg'
  },
]

const Login = ({ onBackdropClick}) => {

  const [show,setShow] = useState(false);
  const [loading,setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [toggle, setToggle] = useState(true);

  const handleImage=(e)=>{
    const reader = new FileReader();
    reader.onload = ()=>{
      if(reader.readyState === 2 ){
        setProfileImage(reader.result)
      }
    };
   reader.readAsDataURL(e.target.files[0]);
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', username);
    formData.append('contact', contact);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('profileImage', profileImage);
  
    try {
      setLoading(!loading);
      const {response} = await fetch('http://localhost:4000/api/auth/register', {
        method: 'POST',
        body: formData, 
      });
      if (response.ok) {
        alert('Register Successful :)');
        console.log(response)
        setLoading(!loading);
        setToggle(!toggle)
      } else {
        const error = await response.text();
        throw new Error(error);
      }
    } catch (error) {
      alert('Failed to Register! ' + error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:4000/api/auth/login', {
        username,
        email,
        password,
      });
      setLoading(false);
      localStorage.setItem('userInfo',JSON.stringify(response.data));
      const token = response.data.token;
      onBackdropClick();
      console.log('Login successful, token:',token);
    } catch (error) {
      console.error('Error logging in:', error.response.data.message);
    }
  };

  const handleClick = () => {
    setToggle(!toggle);
  }
  return (
    <>
      <form
        onSubmit={handleLogin}
        style={{
          display: toggle ? 'flex' : 'none'
        }}
        className="login-container">
        <div className='inner-contaier-signup'>
          <div>
            <label htmlFor="username">username</label>
            <div>
              <PersonIcon />
              <input type="text"
                placeholder='Usename'
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email">email</label>
            <div>
              <MailIcon />
              <input type='email'
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="passsord">password</label>
            <div className='auth-password-input'>
              <input
                type={show?'text':"password"}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {show?
              <VisibilityIcon
              onClick={()=>setShow(!show)}
              />:
              <VisibilityOffIcon
              onClick={()=>setShow(!show)}
              />}
            </div>
          </div>

          <div className='login-btn'>
            <button type='submit'>
              {
                loading?"LOGGING IN...":"LOG IN"
              }
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
          display: toggle ? 'none' : 'flex'
        }}
        className="login-container register-container">

        <div>
          <div>
            <label htmlFor="username">Name</label>
            <div>
              <PersonIcon />
              <input type="text"
                required
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="username">contact</label>
            <div>
              <PhoneIcon />
              <input type='number'
                placeholder='+91'
                onChange={(e) => {
                  setContact(e.target.value)
                }}
              />
            </div>
          </div>


          <div>
            <label htmlFor="email" placeholder='example@gmail.com'>email</label>
            <div>
              <MailIcon />
              <input type='email'
                placeholder='Email'
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="passsord">password</label>
            <div>
              <VpnKeyIcon />
              <input
                placeholder='Password'
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className='login-btn'>
            <button
              type='submit'
            >
              {
                loading?"LOADING...":"REGISTER"
              }
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
          {
            !profileImage?
            <img src='/images/user.png' alt="Selected Profile" /> :
            <img src={profileImage} alt="Selected Profile" />
          }
          <div className="choose-profile">
            <div className="choose-avatar">
              <label htmlFor="avatar">
                Choose Avarat
              </label>
              <div className="avatar-section">
                <ul>
                  {
                    avatars.map((item) => (
                      <li onClick={() => {
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
                  accept="image/*"
                  type='file'
                  onChange={handleImage}
                  id='inputTag' />
                <PhotoIcon />
              </label>
            </div>
          </div>
        </div>

        <div className='register-back-arrow'
          onClick={() => {
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