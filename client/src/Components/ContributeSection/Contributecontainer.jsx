import React from 'react'
import Navbar1 from '../Navbar'
import "./contribute-container.css"
import Feed from './Feed'

const Contributecontainer = () => {
  return (<>
  <Navbar1/>
    <div className='contributecontainer' >
     <div className='createPost d-flex justify-content-center'><h1>+</h1></div>
     <div className='Feed'><Feed/></div>
    </div>
    </>
  )
}

export default Contributecontainer