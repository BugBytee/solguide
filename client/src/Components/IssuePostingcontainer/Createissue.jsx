import { useState, useEffect } from 'react'
import "./Issue.css"
import { db, CollectionID, account, storage, DatabaseID } from "../../Service/Appwritesdkconfig.js"
import { useNavigate } from 'react-router-dom'
import { ID } from 'appwrite'
const Createissue = () => {
  const navigate = useNavigate();
  const [IssueDetails, SetIssueDetails] = useState({
    'title': "",
    'Issue': "",
    'Comments': [],
    'Desc': '',
    'Author': '',
  })
  useEffect(() => {

    const getuser = async () => {
      const userdata = await account.get();
      console.log(userdata);
      SetIssueDetails({ ...IssueDetails, 'Author': userdata.name });
    }
    getuser();

  }, [])

  const addnewissue = async (e) => {


    try {

      e.preventDefault();
      const date_curr = Date.now();
      console.log(`Date: ${date_curr}`);


      SetIssueDetails({

        ...IssueDetails,
        Issued_date: date_curr,
      });
      console.log(IssueDetails);


      // const user = await account.getSession('current');
      const user = await account.getSession('current');
      console.log(`User: ${JSON.stringify(user)}`);
      if (user) {
        const res = await db.createDocument(DatabaseID, CollectionID, ID.unique(), IssueDetails);

        console.log(res);
        console.log(`Res: ${JSON.stringify(res)}`);
        navigate("/contribute")
      } else {
        await account.createAnonymousSession();
        // const res = await db.createDocument(CollectionID, "unique()", IssueDetails);
        const res = await db.createDocument(DatabaseID, CollectionID, ID.unique(), IssueDetails);
        console.log(`Res: ${JSON.stringify(res)}`);
        navigate("/contribute")
      }
    } catch (err) {
      console.log(err);
    }
  }

  // const sendPictostorage = async () => {
  //   let promise = await storage.createFile('65ff0ee4685779c7bdb5', ID.unique, document.getElementById('uploader').files[0]);

  // }

  return (
    <div className="issue">
      <h1 className='m-4 text-white'>Create Issue</h1>

      <form className='form-container'>
        <label>Title</label>
        <input type="text" onChange={(e) => SetIssueDetails({
          ...IssueDetails,
          title: e.target.value
        })} className="form-items" placeholder="add title" id="title" />
        <label>Issue</label>
        <textarea type="text" onChange={(e) => SetIssueDetails({
          ...IssueDetails,
          Issue: e.target.value
        })} className="form-items" placeholder="write your issue" />
        <label>Description</label>
        <textarea type="text" onChange={(e) => SetIssueDetails({
          ...IssueDetails,
          Desc: e.target.value
        })} className="form-items" placeholder="write your issue" />
        {/* <input type="file" onChange={(e) => sendPictostorage(e)} id="uploader" className="form-items" placeholder="add file" /> */}
        <button className=" btn-mine" onClick={(e) => addnewissue(e)}>Create</button>
      </form>
    </div>
  )
}

export default Createissue