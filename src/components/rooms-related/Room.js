import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SkeletonArticle from '../skeletons/SkeletonArticle';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ManIcon from '@mui/icons-material/Man';
import GirlIcon from '@mui/icons-material/Girl';
import WcIcon from '@mui/icons-material/Wc';
import ChatBox from './ChatBox';
import ShareIcon from '@mui/icons-material/Share';
import Footer from '../footer/Footer';

const Room = ({mode}) => {
    const [room,setRoom] = useState();
    var {id} = useParams();

    const shareLink=()=>{
      if(navigator.share){
        navigator.share({
          text:'Checkout this property!',
          url:`http://localhost:3000/room/${id}`,
          title:'RoomSpace'
        })
      }
      else{
        navigator.clipboard.writeText(`http://localhost:3000/room/${id}`);
      }
    }

    useEffect(()=>{
            fetch(`http://localhost:4000/api/rooms/${id}`).then((response) => response.json())
            .then((data) =>{
                setRoom(data);
                console.log(data);
                
            })
            .catch((error) => console.error('Error fetching rooms:', error));
    },[id])
  return (
    <div className='room-container'>
    {
      !room ? 
        <SkeletonArticle/>
      :
      <div className="room-details">
            <div className="style_card"
              style={{
                borderBottom: mode && '1px solid #7C8387FF',
              }}
            >
              <li className="list_cardItem" key={room._id} >
                <a href="/">
                  <img src={room.user_imgUrl?room.user_imgUrl:'/images/user.png'} alt=""
                    style={{
                      boxShadow: mode && 'none',
                    }}
                  />
                  <div className='card_user_details'>
                    <span
                      style={{
                        color: mode && '#AEB6BDFF',
                      }}
                    >
                      {room.lender}
                    </span>
                    <h4
                      style={{
                        color: mode && '#E1EDF5FF',
                      }}
                    >{room.propertyName}</h4>
                  </div>
                </a>
                <button
               
                  style={{
                    color: mode && '#485FE4',
                  }}
                >  <AddIcon/>
                    Save
                </button>
                <div>
                  <button
                    style={{
                      color: mode && '#485FE4',
                    }}
                  >
                    <MoreVertIcon />
                  </button>
                </div>
              </li>

              <div className="style_card_content">
                      <div>
                        <div className="swiper swiper-initialized">
                          <div className='swiper-wrapper'>
                            <div className='swiper-slide'>
                              <div className='style_image_wrapper'>
                              <img src={room.images} alt="roomimage"/>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                <div className="false style_content">

                 <div className="property-contact-info">
                  <li>
                     Contact:{' '} 
                     {room.contact?room.contact:'No contact info'}
                  </li>
                  <li
                  onClick={shareLink}
                  >
                    <ShareIcon/>
                  </li>
                 </div>

                  <p
                    style={{
                      color: mode && '#E1EDF5FF',
                    }}
                    
                  >
                   {'->'} {room.description}
                   
                  </p>
                </div>

                <div className="property-essentials">
                <span>
                    <h3>
                   Price: {room.price}
                    </h3>
                  </span>

                  <span>
                  <h4>
                    Property Type: {room.category}
                  </h4>
                  </span>
                </div>


            <div className="property-essentials">
              <span>
              <LocationOnIcon/> Location: {room.location}
              </span>

              <span>
                  {
                    room.genderRequirement===0 && <span>
                      <ManIcon/> Only Males
                    </span>
                    
                  }
                  {
                    room.genderRequirement===1 && <span>
                      <GirlIcon/> Only Females
                    </span>
                  }
                  {
                  room.genderRequirement===2 && <span>
                    <WcIcon/> Both Male & Female
                  </span>
                  }
                  </span>
                </div>

              </div>

              <div className="post-reviews">
                <ChatBox roomId={id}/>
              </div>
            </div> 
      </div>
    }
      <Footer/>
    </div>
  )
}

export default Room
