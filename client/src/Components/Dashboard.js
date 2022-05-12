import { useEffect, useState } from "react";
import { account } from "../Service/Appwritesdkconfig";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import { Card } from "./Card";
const Dashboard = () => {
  const navigate = useNavigate();
  const [userDetails, setuserDetails] = useState({
    email: "",
    name: "",
  });
  useEffect(() => {
    const getuser = async () => {
      try {
        const promise = await account.get();

        setuserDetails({
          ...userDetails,
          email: promise.email,
          name: promise.name,
        });
      } catch (err) {
        console.log(err.message);
      }
    };
    getuser();
  }, []);

  const Logoutuser = async () => {
    try {
      await account.deleteSession("current");
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <Navbar/>
      {/* <button onClick={() => Logoutuser()}>Logout</button> */}
      <Card name={userDetails.name} email={userDetails.email}/>
    </>
  );
};
export default Dashboard;
