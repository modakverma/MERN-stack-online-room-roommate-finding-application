import React from 'react'
import './FollowCard.css'
import AddIcon from '@mui/icons-material/Add';
import { Link, useNavigate } from 'react-router-dom';

const FollowCard = ({ mode,rooms }) => {
  const navigate = useNavigate();
  function compare( a, b ) {
    if ( a.ratings < b.ratings ){
      return -1;
    }
    if ( a.ratings > b.ratings ){
      return 1;
    }
    return 0;
  }
  return (

    <section class="followCard"
      style={{
        backgroundColor: !mode ? "#fff" : "#555763D6",
        color: !mode ? "black" : "#838485"
      }}
    >
          <span>Top Properties</span>
      {
      rooms.sort(compare).slice(0,4).map((item, index) => (
          <li key={index}>
            <Link to={`/room/${item._id}`}>
              <img src={item.images} alt="" />
              <div className="list_info">
                <span
                  style={{
                    color: mode && "#B5BEC4FF"
                  }}
                >
                  {item.lender}
                </span>
                <h4
                  style={{
                    color: mode && "#D3DEE6FF"
                  }}
                >
                  {item.propertyName}
                </h4>
              </div>
            </Link>
            <button
              style={{
                color: mode && 'tomato',
              }}
            >
              <AddIcon />
              Save
            </button>
          </li>
        )
        )
      }
    </section>
  )
}

export default FollowCard
