import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css'
import SaveAsIcon from '@mui/icons-material/SaveAs';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import Footer from '../../components/footer/Footer';

const AboutUs = () => {
  const [user,setUser]= useState();
  const navigate = useNavigate();
  const [userToken,setUserToken] = useState('');

  const callAboutPage = async () => {
    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${userToken}`,
        },
      };
      const response = await fetch('http://localhost:4000/api/auth/about', config);
      const data = await response.json();
      setUser(data.user)
    } catch (error) {
      console.log(error);
      navigate('/');
    }
  };

  useEffect(() => {
    var userInfo = JSON.parse(localStorage.getItem('userInfo'))
    setUserToken(userInfo? userInfo.token: null);
    callAboutPage();
  }, [userToken]);

return (
user? <div className='profile-page-conatiner'>
<div>
<span className='profile-heading-tag'
 onClick={()=>{
    navigate('/rooms')
 }}
 >
 <ArrowBackIosIcon/>
   Profile
 </span>
<div className="profile_img">
 {
  user.profileImage ? <img src={user.profileImage.url} alt={user.profileImage.public_id} />:
  <img src='/images/user.png'/>
 }
</div>
<div className="profile-details">
<div className="main-details">
 <span>
   <h1>
   {user.username}
   </h1>
 </span>
 <span className='get-in-touch'>
  <div className="email">
  <AttachEmailIcon/> {user.email}
  </div>
  <div className="contact">
  <ContactPhoneIcon/> {user.contact}
  </div>
 </span>
 <span className='edit-profile'>
   <SaveAsIcon/>
 </span>
</div>

<div className="about">
<label htmlFor="">About:</label>
<input type="text" placeholder='"About Text"' />
<span>
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, natus repellat iure ducimus nesciunt atque quo tenetur laudantium culpa fugiat nisi consequuntur deleniti aspernatur inventore dolore voluptates quas quis exercitationem consequatur nobis aliquid!
</span>
</div>
<div className="social">
 <label htmlFor="">Social: </label>
   <div className="social-tags">
     <InstagramIcon/>
     <FacebookIcon/>
     <LinkedInIcon/>
   </div>
</div>

<Footer/>
</div>
</div>
</div>
:
<div className='not-authorised'>
 <div>
 <div>You are not Logged In :(</div>
  <div>
  <span>Log In</span>
  <span>OR</span>
  <span>Create an account</span>
  </div>
 </div>
</div>
  );
};

export default AboutUs;
