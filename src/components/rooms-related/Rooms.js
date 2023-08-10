import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link, Outlet } from 'react-router-dom';

const Rooms = ({mode,rooms}) => {
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
            {rooms.length} Rooms
          </h3>
        </div>
      </div>

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
    </header>
    <ul
      style={{
        color: mode && '#D3DEE6FF',
        borderBottom: mode && '1px solid #7C8387FF',
      }}
    >
      <Link to="best-picks">Best Picks</Link>
      <Link to="">All </Link>
    </ul>
    <section>
      <div></div>
      <button>
          <Link to='list-space'>
        <h3>
            List Your Space
        </h3>
          </Link>
      </button>
    </section>
    <Outlet/>
  </div>
  )
}

export default Rooms
