import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';


const MiddleSection = ({ mode }) => {
  return (

      <div className="community_topHeader">
        <header
          style={{
            borderBottom: mode && '1px solid #7C8387FF',
          }}
        >
          <div>
            <img src="https://d3gmywgj71m21w.cloudfront.net/3b2976ba93bbe9d96b4ed00a4966bd87" alt="aa" />
            <div className="community_info" >
              <h2
                style={{
                  color: mode && 'tomato',
                }}
              >DSA Community</h2>
              <h3
                style={{
                  color: mode && '#D3DEE6FF',
                }}
              >
                120 Memners
              </h3>
            </div>
          </div>
          <div>
            <button
              style={{
                color: mode && 'tomato',
              }}
            >
              <AddIcon />
              Join
            </button>
            <div>
              <button className='community_dots'
                style={{
                  color: mode && 'tomato',
                }}
              >
                <MoreVertIcon />
                <ul>

                </ul>
              </button>
            </div>
          </div>
        </header>
        <ul
          style={{
            color: mode && '#D3DEE6FF',
            borderBottom: mode && '1px solid #7C8387FF',
          }}
        >
          <Link to="/posts">Post</Link>
          <Link to="/announcement">Announcement</Link>
        </ul>
        <section>
          <div></div>
          <button>
            <h3>
              Join DSA Community
            </h3>
          </button>
        </section>
      </div>

      
      
  )
}

export default MiddleSection
