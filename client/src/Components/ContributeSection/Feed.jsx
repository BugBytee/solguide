import { useEffect, useState } from 'react'
import "./feedCard.css"
import FeedCard from './FeedCard'
import { CollectionID, db, storage, DatabaseID } from "../../Service/Appwritesdkconfig"




const Feed = () => {
  const [dataAll, setdataAll] = useState([]);
  const [Allpic, setAllpic] = useState([]);

  useEffect(() => {
    const getallisuses = async () => {
      const data = await db.listDocuments(DatabaseID, CollectionID);
      const picData = await storage.listFiles('65ff0ee4685779c7bdb5');
      setAllpic(picData.files.reverse());


      setdataAll(data.documents.reverse());

    }
    getallisuses();
  }, [dataAll, Allpic])

  return (
    <div className='d-flex flex-column '>
      {dataAll?.map((i, index) => {
        return (
          <FeedCard key={index} Author={i.Author} title={i.title} Comments={i.Comments} Desc={i.Desc} Issue={i.Issue} DocumentId={i.$id} picId={Allpic[index]?.$id} />)

      })}


    </div>
  )
}

export default Feed