import React,{Fragment} from 'react'
import LeftSection from './sections/LeftSection'
import MiddleSection from './sections/MiddleSection'
import RightSection from './sections/RightSection'
import './Home.css'

const Home = ({mode}) => {
  return (
    <Fragment>
        <div className="home-container"
        style={{
          backgroundColor: !mode? "#fff":"#40424FFF",
          color: !mode? "black": "#838485"
          }}
        >
        <LeftSection mode={mode} />
        <div className="community_container_outer"
         style={{
          backgroundColor: mode && '#1D242B',
        }}
        >
        <MiddleSection mode={mode} />
        <RightSection mode={mode} />
        </div>
        </div>
    </Fragment>
  )
}

export default Home
