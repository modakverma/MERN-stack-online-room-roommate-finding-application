import React, {useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const RightSection = ({ mode }) => {
  const [query,setQuery] = useState('');
  const [communityArray,setCommunityArray] = useState([])
  const result= [];
  const handleSearch=async()=>{
    try {
      const response = await axios.get(`http://localhost:4000/api/users?search=${query}`, {
        withCredentials: true,
      });
      result.push(response.data.users);
      setCommunityArray(response.data.users);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    handleSearch()
  },[query])
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
            <input type="text" placeholder='Username or email..'
            onChange={(e)=>{
              setQuery(e.target.value)
            }}
              style={{
                color: mode && '#FFF',
              }}
            />
            <div
            onClick={handleSearch}
            >
            <SearchIcon
              style={{
                color: mode && '#485FE4',
              }}
            />
            </div>
          </div>
        </fieldset>
        <h3
          style={{
            color: mode && '#B9C3C9FF',
          }}
        >Search Results</h3>
      </div>

      <article className="infiniteScroll_container2">
        {
          communityArray && query? communityArray.map((item, index) => (
            <li key={index}>
              <a href=" " className='list_item'>
                <img src={item.profileImage.url?item.profileImage.url:'/images/user.png'} alt={item.profileImage.public_id} 
                  style={{
                    boxShadow: mode && '3px 3px 13px #16161AE0',
                  }}
                />
                <div className='list_info'>
                  <h4
                    style={{
                      color: mode && '#D3DEE6FF',
                    }}
                  >{item.username}</h4>
                  <h3
                    style={{
                      color: mode && '#AEB6BDFF',
                    }}
                  >{item.email}</h3>
                </div>
              </a>
              <button
                style={{
                  color: mode && '#485FE4',
                }}
              >
                <AddIcon />
                Join
              </button>
            </li>
          )):
          <div className='search-empty'>
           Search to find results...
          </div>
        }
      </article>
    </div>
  )
}

export default RightSection
