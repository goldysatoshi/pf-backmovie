import React, { useState } from 'react';
import { Route, Routes }  from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import Destination from './Destination';
import Support from './Support';


const ShowCase = () => {

  const [active, setActive] = useState(false);
  
  const classToggle = () => {
      setActive(!active)
    }


  return (
    <div className={`showcase ${active ? "active" : ""}`}>
      <div className='header'>
          <h1 className='logo'>
              Fantasy
          </h1>
          <div className={`toggle ${active ? "active" : ""}`}
          onClick={classToggle}>
          </div>
      </div>

      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/contact/`} element={<Contact />} />
        <Route path={`/destination/`} element={<Destination />} />
        <Route path={`/support/`} element={<Support />} />
      </Routes>
    
    </div>
  )
}

export default ShowCase;