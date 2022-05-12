import {useState,useEffect} from 'react'
import {CollectionID,account,appwrite,db} from '../../Service/Appwritesdkconfig'
import "./feed.css"
const FeedCard = ({title,Issue,Desc,Comments,DocumentId,Author,picId}) => {
  const[showcomments,setshowcomments]=useState(false);
  const [msg,setmsg]=useState([]);
  const [curruser,setcurruser]=useState([]);
  const [imgsrc,setImageSrc]=useState('');
 
 
  useEffect(() => {
    const getimageSrc= async ()=>{

      const picSrc= await appwrite.storage.getFilePreview ('627cf86774dea7873dbe',picId);
      console.log(picSrc); 
      setImageSrc(picSrc.href);
        }
        getimageSrc();
   

    const getuser=async ()=>{
      const userdata= await account.get();

      setcurruser(userdata.name);
    }
    getuser();
  
    const unsubscribe= appwrite.subscribe(['collection.codeIssue.documents'],(data)=>{
      if(data.event==='database.documents.update'){
        setmsg((msgs)=>[...msgs,data.payload]);
      }
    });
   
  return ()=>{
    unsubscribe();
  }
  
  }, [])
  



  const SendComment=async (e,id)=>{
    e.preventDefault();
  const res= await db.updateDocument(CollectionID,id,{Comments:[...Comments,msg+'@####@'+curruser]})
console.log(res);
setmsg('');
     
  }
  return (
   <>
 <div className="card  mx-md-auto m-4" >
  <div className="card-body">
     <h5 className="card-title">{title}</h5>
      <div className="card-text-container mx-auto ">
        <div className='code-section mx-auto my-3 '>
        <code className="text-white ">{Issue}</code>
       </div>
      </div>
      <p className='code-section m-2'><strong>Description:</strong> {Desc}</p>
     <div className="text-center">
     <img src={imgsrc} className="feed-img my-3 text-center " />
     </div>
     <p className='text-right'>-- {Author}</p>
     
    <button class='btn-mine' onClick={()=>setshowcomments(!showcomments)}>Comment</button>
   
        <div className=' mx-auto my-3 '>
          {showcomments?
          <>
           <input type="text" className='form-new' onChange={(e)=>setmsg(e.target.value)} value={msg}  placeholder='write here....'/> 
           <button className='btn-mine'  onClick={(e)=>SendComment(e,DocumentId)}>send</button>
           </>
           :null}
           <div className=" my-3">
         { showcomments?
        
        Comments.map((comment)=>{ 
          return(
          
        <p className='comment-container'>{comment.split('@####@')[0]} &#160;<strong style={{color:"wheat"}}>@<i>{comment.split('@####@')[1]}</i></strong>  </p>
       );
        })
        :null}
         </div>
       </div>
      </div>
  </div>
</>
  )
}

export default FeedCard