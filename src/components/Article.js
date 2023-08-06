import React, { useState } from 'react'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';

const Article = ({mode, cardArray}) => {
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
          cardArray.map((item, index) => (
            <div key={index} className="style_card"
              style={{
                borderBottom: mode && '1px solid #7C8387FF',
              }}
            >
              <li className="list_cardItem">
                <a href="/">
                  <img src={item.user_imgUrl} alt=""
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
                      {item.user_id}
                    </span>
                    <h4
                      style={{
                        color: mode && '#E1EDF5FF',
                      }}
                    >{item.name}</h4>
                  </div>
                </a>
                <button
                onClick={()=>{
                    if(follow)setFollow(false)
                    else setFollow(true)
                }}
                  style={{
                    color: mode && 'tomato',
                  }}
                >   
                  {
                    !follow ? <>
                    <AddIcon/>
                    Follow
                    </>:
                    'Following'
                  }
                </button>
                <div>
                  <button
                    style={{
                      color: mode && 'tomato',
                    }}
                  >
                    <MoreVertIcon />
                  </button>
                </div>
              </li>

              <div className="style_card_content"
              onClick={()=>{
                navigate(`/post/${item.id}`)
              }}
              >
                <div className="false style_content">
                  <p
                    style={{
                      color: mode && '#E1EDF5FF',
                    }}
                  >
                    {item.postData}
                  </p>
                </div>
                <a href="/"
                  style={{
                    color: mode && "#9BA3A8FF",
                  }}
                >Read Less</a>
                <div>
                  <div className="swiper swiper-initialized">
                    <div className='swiper-wrapper'>
                      <div className='swiper-slide'>
                        <div className='style_image_wrapper'>
                          <img src={item.postImage} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='style_actions'>
                <div className="style_desktopChat">
                  <button className='style_action'
                    style={{
                      color: mode && '#E1EDF5FF',
                    }}
                  >
                    <ChatBubbleOutlineIcon />
                    {item.comments}
                  </button>
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
                  {item.likes}
                </button>


                <button className='style_action'
                  style={{
                    color: mode && '#E1EDF5FF',
                  }}
                >
                  <ShareIcon />
                </button>
                <a href="/" className="style_link">
                  <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                  </div>
                </a>
              </div>
            </div>
          ))
        }
      </article>
  )
}

export default Article
