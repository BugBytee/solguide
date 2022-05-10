import React from 'react'
import "./Issue.css"
const Createissue = () => {
  return (
    <div className="issue">
        <h1 className='m-4 text-white'>Create Issue</h1>
        
        <form className='form-container'>
             <label>Title</label>
            <input type="text" className="form-items" placeholder="add title" id="title"/>
            <label>Issue</label>
            <textarea type="text" className="form-items" placeholder="write your issue"/>
            <button class=" btn-mine">Create</button>
        </form>
    </div>
  )
}

export default Createissue