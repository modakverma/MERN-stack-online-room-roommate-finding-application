import React from 'react'
import './User.css'
import NearMeIcon from '@mui/icons-material/NearMe';

const User = ({ mode }) => {
  return (
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
        <span>
          27k
          <label htmlFor=""
            style={{
              color: mode && "#D3DEE6FF"
            }}
          >
            Followers
          </label>
        </span>

        <span className="emoji-image" >
          <img alt="Logo" loading="lazy" src="/images/sad_face.png" width="100%" height="100%" class="style_rotate90__uupf7 style_mask__Z8nAx" />
        </span>
        <img src="https://www.plutonn.com/static/media/Mask.c87a2edc5f7bc40a251cbff35040b1cb.svg" alt="" className='emoji-image' />


        <span>
          67
          <label htmlFor=""
            style={{
              color: mode && "#D3DEE6FF"
            }}
          >
            Following
          </label>
        </span>

      </div>

      <div className="user-details">
        <span
          style={{
            color: mode && 'tomato',
          }}
        >ABC User</span>
        <a href="https://"
          style={{
            color: mode && "#D3DEE6FF"
          }}
        >@abc_platform</a>
      </div>

      <div className="welcome"
        style={{
          color: mode && "#B5BEC4FF"
        }}
      >
        <span>Hey! Welcome to Plutonn</span>
        <span>Share | Connect | Apply.</span>

      </div>
      <div className="post-button">
        <button>
          <NearMeIcon />
          Post
        </button>
      </div>
    </section>
  )
}

export default User
