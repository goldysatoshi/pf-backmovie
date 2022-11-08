import React from 'react'
import { Link } from 'react-router-dom';

const Text = () => {
  return (
    <div className='text'>
        <h2>Fantasy Life</h2>
        <h3>Explore Something New</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. I sapiente
          voluptatum minus veritatis, magni eligendi doloremque dolor?
        </p>
        <Link to={`#`}>Dive Into</Link>
    </div>
  )
}

export default Text;