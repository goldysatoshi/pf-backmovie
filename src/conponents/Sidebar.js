import React from 'react'
import { Link } from 'react-router-dom';
// import classToggle from './ShowCase'

const SideBar = () => {
  return (
    <div className='menu'>
        <ul>
            <li>
                <Link to={`/`}>Home</Link>
            </li>
            <li>
                <Link to={`/contact/`}>Contact</Link>
            </li>
            <li>
                <Link to={`/destination/`}>Destination</Link>
            </li>
            <li>
                <Link to={`/support/`}>Support</Link>
            </li>
        </ul>
    </div>
  )
}

export default SideBar;