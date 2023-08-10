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
            <img src="/images/categories/hotel.png" alt="aa" />
            <div className="community_info" >
              <h2
                style={{
                  color: mode && '#485FE4',
                }}
              >ROOMS</h2>
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
                color: mode && '#485FE4',
              }}
            >
              <AddIcon />
              Join
            </button>
            <div>
              <button className='community_dots'
                style={{
                  color: mode && '#485FE4',
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
          <Link to="/posts">Find</Link>
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
