import React, { useState} from 'react'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ManIcon from '@mui/icons-material/Man';
import GirlIcon from '@mui/icons-material/Girl';
import WcIcon from '@mui/icons-material/Wc';
import ChatBox from './ChatBox';
import SkeletonArticle from '../skeletons/SkeletonArticle';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import { Link } from 'react-router-dom';

const Article = ({mode,rooms}) => {
    const [chatboxVisible,setChatboxVisible] = useState(false);

    const navigate = useNavigate();
    const [follow,setFollow] = useState(false);
    const [emoji,setEmoji]= useState(false);
  return (
    <article
    className='infiniteScroll_container' 
    id='posts'
    style={{
        backgroundColor: mode && '#1D242B',
    }}
    >
        {
        rooms.length === 0 ? (
          Array.from({ length: 5 }).map((_, index) => (
              <SkeletonArticle key={index} />
          ))
        )
          :
         rooms.map((item) => (
          <div className="style_card"
            style={{
              borderBottom: mode && '1px solid #7C8387FF',
            }}
          >
            <li className="list_cardItem" key={item._id} >
              <a href="/">
                <img src={item.user_imgUrl?item.user_imgUrl:'/images/user.png'} alt=""
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
                    {item.lender}
                  </span>
                  <h4
                    style={{
                      color: mode && '#E1EDF5FF',
                    }}
                  >{item.propertyName}</h4>
                </div>
              </a>
              <button
              onClick={()=>{
                  if(follow)setFollow(false)
                  else setFollow(true)
              }}
                style={{
                  color: mode && '#485FE4',
                }}
              >   
                {
                  !follow ? <>
                  <AddIcon/>
                  Save
                  </>:
                  'Saved'
                }
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

            <div className="style_card_content"
            onClick={()=>{
              navigate(`/room/${item._id}`)
            }}
            >
                    <div>
                      <div className="swiper swiper-initialized">
                        <div className='swiper-wrapper'>
                          <div className='swiper-slide'>
                            <div className='style_image_wrapper'>
                            <img src={item.images} alt="roomimage"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
              <div className="false style_content">
                <div className="property-essentials">
                <span>
                  <h3>
                  {item.price}
                  </h3>
                </span>

                <span>
                <h4>
                  {item.category}
                </h4>
                </span>

                <span>
                {
                  item.genderRequirement===0 && <span>
                    <ManIcon/> Only Males
                  </span>
                  
                }
                {
                  item.genderRequirement===1 && <span>
                    <GirlIcon/> Only Females
                  </span>
                }
                {
                item.genderRequirement===2 && <span>
                  <WcIcon/> Both Male & Female
                </span>
                }
                {
                item.genderRequirement===3 && <span>
                  <FamilyRestroomIcon/>Only Family
                </span>
                }
                </span>
                
                <span>
                  <LocationOnIcon/>
                  {item.location}
                </span>
                </div>
               
               <div className="property-contact-info">
                <li>
                  +91 {item.contact}
                </li>
               </div>

                <p
                  style={{
                    color: mode && '#E1EDF5FF',
                  }}
                  
                >
                 {'->'} {item.description.slice(0,40)}..
                 
                </p>
              </div>
    
              <Link to={`/room/${item._id}`}
                style={{
                  color: mode && "#9BA3A8FF",
                }}
              >Read More</Link>
            </div>

            <div className='style_actions'>
              <div className="style_desktopChat">
                <button 
                className='style_action'
                  style={{
                    color: mode && '#E1EDF5FF',
                  }}
                >
                  <ChatBubbleOutlineIcon
                  onClick={()=>setChatboxVisible(!chatboxVisible)}
                  />
                  {item.ratings}
                </button>
              {
                chatboxVisible &&  
                <div className="chatbox-container">
                   <ChatBox/>
                </div>
              }
              </div>


              <button className='style_action'
              onMouseEnter={()=>{
                 setEmoji(true)
              }}
              onMouseLeave={()=>{
                  setEmoji(false)
              }}
                style={{
                  color: mode && '#E1EDF5FF',
                }}
              >
               {
                  emoji &&  <ul className='post-emojies' >
                  <li>
                      <img src="https://www.plutonn.com/static/media/like.d452fa0b21760da2ff8ef96f59335377.svg" alt="" />
                  </li>
                  <li>
                      <img src="	https://www.plutonn.com/static/media/heart.4c0f05a06b4f7bf136076bec52774823.svg" alt="" />
                  </li>
                  <li>
                      <img src="https://www.plutonn.com/static/media/celebrate.21c086fa5bd79d3cb54d344758b57906.svg" alt="" />
                  </li>
                  <li>
                      <img src="https://www.plutonn.com/static/media/support.ad9fef0abfafb117898961830e264e24.svg" alt="" />
                  </li>
                  <li>
                      <img src="https://www.plutonn.com/static/media/laugh.52fcfbab06c532905bb1c0eea21352e9.svg" alt="" />
                  </li>
                 </ul>
               }
                <ThumbUpIcon/>
              </button>

              <button className='style_action'
                style={{
                  color: mode && '#E1EDF5FF',
                }}
              >
                <ShareIcon />
              </button>
      
            <span className='post-date'>
              Posted On: {item.date}
            </span>
            </div>
          </div>
        ))
        }
      </article>
  )
}

export default Article
