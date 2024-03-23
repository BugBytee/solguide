import { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { account } from "../Service/Appwritesdkconfig";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigation = useNavigate();
  const [userDetails, setUserdetails] = useState({
    email: "",
    password: "",
  });

  const loginuser = async (e) => {
    e.preventDefault();
    console.log(userDetails);
    try {
      await account.createEmailPasswordSession(userDetails.email, userDetails.password);

      navigation("/dashboard");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Form className="login-form">
      <h1 className="head">LOGIN FORM</h1>
      <FormGroup className="details">
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setUserdetails({
              ...userDetails,
              email: e.target.value,
            });
          }}
        />
        <Label>Password</Label>
        <Input
          type="password"
          onChange={(e) => {
            setUserdetails({
              ...userDetails,
              password: e.target.value,
            });
          }}
          placeholder="Password"
        />
      </FormGroup>
      <Button
        className="btn-lg btn-dark btn-block"
        onClick={(e) => {
          loginuser(e);
        }}
      >
        Log in
      </Button>
    </Form>
  );
}

export default Login;
