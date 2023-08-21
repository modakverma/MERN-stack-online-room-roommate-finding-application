import React from 'react'
import FollowCard from '../../components/follow_card/FollowCard'
import HomeNav from '../../components/home_navigation/HomeNav'
import User from '../../components/user/User'

const LeftSection = ({ mode, rooms }) => {
  return (
    <div className='left-section'
      style={{
        backgroundColor: !mode ? "#fff" : "#383A45FF",
        color: !mode ? "black" : "#838485"
      }}
    >
      <User mode={mode} />
      <HomeNav mode={mode} />
      <FollowCard mode={mode} rooms={rooms} />
    </div>
  )
}

export default LeftSection
