import React from 'react'
import Movie from '../images/fantasy.mp4'
import Text from './Text'
import Soscial from './Soscial'
// import ReactPlayer from 'react-player'

const Home = () => {
  return (
    <div className='showcace'>
      {/* <div className='video'>
        <ReactPlayer url='https://sawayamasatoshi.com/build/static/media/fantasy.092bddd99e55135b4110.mp4' playing muted loop/>
      </div> */}
        <video
        src={Movie}
         autoPlay 
         loop 
         muted
        >
        </video>
      <div className='overlay'></div>
      <Text />
      <Soscial />
    </div>
  )
}

export default Home;