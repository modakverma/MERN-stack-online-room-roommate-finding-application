import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

const communityArray = [
  {
    communityName: "DSA Community",
    communityImg: "https://d3gmywgj71m21w.cloudfront.net/3b2976ba93bbe9d96b4ed00a4966bd87",
    memberCount: 126,
    postId: 1,
  },
  {
    communityName: "DSA Wizards",
    communityImg: "https://d3gmywgj71m21w.cloudfront.net/20a817718420d7ae995fdbdbe5518c42.jpeg",
    memberCount: 11,
    postId: 2,
  },
  {
    communityName: "MEME",
    communityImg: "https://d3gmywgj71m21w.cloudfront.net/4919dbf85b7c7c303ad4ecd991c72bd6.jpeg",
    memberCount: 8,
    postId: 3,
  },
  {
    communityName: "Testing...",
    communityImg: "http://www.w3.org/2000/svg",
    memberCount: 2,
    postId: 4,
  },
]

const RightSection = ({ mode }) => {
  return (
    <div className='community_sidebar'
      style={{
        backgroundColor: !mode ? "#fff" : "#383A45FF",
        color: !mode ? "black" : "#838485"
      }}
    >
      <div className="style_topHeader"
        style={{
          borderBottom: mode && '1px solid #75788AAF',
          color: !mode ? "black" : "#838485"
        }}
      >
        <fieldset>
          <div
            style={{
              backgroundColor: !mode ? "#fff" : "#27282EFF",
              color: !mode ? "black" : "#838485",
              border: mode && '0.4px solid #7F858AFF'
            }}
          >
            <input type="text" placeholder='Search'
              style={{
                color: mode && '#FFF',
              }}
            />
            <SearchIcon
              style={{
                color: mode && 'tomato',
              }}
            />
          </div>
        </fieldset>
        <h3
          style={{
            color: mode && '#B9C3C9FF',
          }}
        >Popular Communities</h3>
      </div>

      <article className="infiniteScroll_container2">
        {
          communityArray.map((item, index) => (
            <li key={index}>
              <a href="/" className='list_item'>
                <img src={item.communityImg} alt=""
                  style={{
                    boxShadow: mode && '3px 3px 13px #16161AE0',
                  }}
                />
                <div className='list_info'>
                  <h4
                    style={{
                      color: mode && '#D3DEE6FF',
                    }}
                  >{item.communityName}</h4>
                  <h3
                    style={{
                      color: mode && '#AEB6BDFF',
                    }}
                  >{item.memberCount} Members</h3>
                </div>
              </a>
              <button
                style={{
                  color: mode && 'tomato',
                }}
              >
                <AddIcon />
                Join
              </button>
            </li>
          ))
        }
      </article>
    </div>
  )
}

export default RightSection
