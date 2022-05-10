import {useState} from 'react'
import {BiUpArrowAlt} from 'react-icons/bi';
const FeedCard = () => {
  const[showcomments,setshowcomments]=useState(false);
  return (
   <>
 <div className="card mx-auto m-4" >
  <div className="card-body">
     <h5 className="card-title">Card title</h5>
      <div className="card-text-container mx-auto ">
        <div className='code-section mx-auto my-3 '>
        <code className="text-white ">Some quick example text to build on the card title and make up the bulk of the card's content.</code>
       </div>
      </div>
    <button class='btn-mine' onClick={()=>setshowcomments(!showcomments)}>Comment</button>
   
        <div className=' mx-auto my-3 '>
         { showcomments?
          <div className=" comment-container mx-auto ">
            <span className=''> 1<BiUpArrowAlt/></span>
        <span className=''>that not the right approach</span>
        </div>:null}
       </div>
      </div>
  </div>
</>
  )
}

export default FeedCard