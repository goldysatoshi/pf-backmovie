import React from 'react'
import Facebook from '../images/facebook.png'
import Twitter from '../images/twitter.png'
import Instagram from '../images/instagram.png'
import { Link } from 'react-router-dom';

const Soscial = () => {
  return (
    <div>
        <ul className='soscial'>
            <li>
                <Link to={'#'}>
                    <img src={Facebook}/>
                </Link>
            </li>
            <li>
                <Link to={'#'}>
                    <img src={Twitter}/>
                </Link>
            </li>
            <li>
                <Link to={'#'}>
                    <img src={Instagram}/>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Soscial;