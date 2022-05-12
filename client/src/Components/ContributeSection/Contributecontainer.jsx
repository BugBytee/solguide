import React from 'react'
import Navbar1 from '../Navbar'
import "./contribute-container.css"
import Feed from './Feed'
import { useNavigate } from 'react-router-dom'

import {AiFillPlusCircle} from "react-icons/ai"

const Contributecontainer = () => {
  const navigate=useNavigate()
  return (<>
  <Navbar1/>
    <div className='contributecontainer' >
     <div className='createPost '><span onClick={()=>{navigate("/createIssue")}}><AiFillPlusCircle color="#50d8a2" fontSize="5rem"/></span></div>
     <div className='Feed '><Feed/></div>
    </div>
    </>
  )
}

export default Contributecontainer