import React from 'react'
import './FollowCard.css'
import AddIcon from '@mui/icons-material/Add';

const cardData = [
  {
    img_url: "/images/logo.png",
    host: "@cipherschools",
    hostName: "Cipher...",
  },
  {
    img_url: "/images/logo.png",
    host: "@cipherschools",
    hostName: "Cipher...",
  },
  {
    img_url: "/images/logo.png",
    host: "@cipherschools",
    hostName: "Cipher...",
  },
  {
    img_url: "/images/logo.png",
    host: "@cipherschools",
    hostName: "Cipher...",
  },
  {
    img_url: "/images/logo.png",
    host: "@cipherschools",
    hostName: "Cipher...",
  },
  {
    img_url: "/images/logo.png",
    host: "@cipherschools",
    hostName: "Cipher...",
  },
  {
    img_url: "/images/logo.png",
    host: "@cipherschools",
    hostName: "Cipher...",
  },
  {
    img_url: "/images/logo.png",
    host: "@cipherschools",
    hostName: "Cipher...",
  },
  {
    img_url: "/images/logo.png",
    host: "@cipherschools",
    hostName: "Cipher...",
  },
  {
    img_url: "/images/logo.png",
    host: "@cipherschools",
    hostName: "Cipher...",
  },
]
const FollowCard = ({ mode }) => {
  return (

    <section class="followCard"
      style={{
        backgroundColor: !mode ? "#fff" : "#555763D6",
        color: !mode ? "black" : "#838485"
      }}
    >

      {
        cardData.map((item, index) => (
          <li key={index}>
            <a href="/profile">
              <img src={item.img_url} alt="" />
              <div className="list_info">
                <span
                  style={{
                    color: mode && "#B5BEC4FF"
                  }}
                >
                  {item.host}
                </span>
                <h4
                  style={{
                    color: mode && "#D3DEE6FF"
                  }}
                >
                  {item.hostName}
                </h4>
              </div>
            </a>
            <button
              style={{
                color: mode && 'tomato',
              }}
            >
              <AddIcon />
              Follow
            </button>
          </li>
        )
        )
      }
    </section>
  )
}

export default FollowCard
