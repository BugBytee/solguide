import "./App.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
// import Dashboard from "./Components/Dashboard";
import { useState } from "react";

// import Navbar from './Components/Navbar'
function App() {
  const [loggedin, setloggedin] = useState(false);
  return (
    <>
    
      <div className="header">
      <div className="brandlogo">SOLGUIDE</div>
        <div className="header1 d-flex">
        
          <p className="changebtn ">
            {loggedin ? "Already have an account? " : "Want a new account? "}
          </p>
          <span className="p-2"></span>
          <p
            className="changebtn colorbtn "
            onClick={() => setloggedin(!loggedin)}
          >
            {loggedin ? "Signup" : "Login"}
          </p>
        </div>
        {loggedin ? <Login></Login> : <Signup />}
      </div>
    </>
  );
}

export default App;
