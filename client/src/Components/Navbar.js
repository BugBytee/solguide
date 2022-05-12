import React from "react";
import "./Navbar.css";
import { Button, Navbar, Nav } from "react-bootstrap";
import {Link,useNavigate } from "react-router-dom";
import {account} from "../Service/Appwritesdkconfig";

function Navbar1() {
  const navigate=useNavigate();
  const Logoutuser = async () => {
    try {
      await account.deleteSession("current");
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <Navbar className="nav-container">
   
        <Nav className="">
          <div className="main-nav">
          <div className="nav-left">
          <Navbar.Brand href="" className="nav-brand mt-1">S0LGUIDE</Navbar.Brand>
         
         <Link  className="nav-item p-2 my-auto" to="/contribute">Contribute</Link>
           
          <Link   className="nav-item p-2 my-auto" to="/dashboard" >Dashboard</Link>
          </div>
          <div className="logout-container">
          <Nav.Link href="">
            <Button variant="outline-dark" className="btn-logout" onClick={()=>Logoutuser()}>
              Logout
            </Button>
          </Nav.Link>
          </div>
          </div>
        </Nav>
    </Navbar>
  );
}
export default Navbar1;
