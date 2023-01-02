
import { Link, useNavigate} from "react-router-dom";
import {register} from "../services/user";
import React,{useState} from "react";
import { Form, Button, FormGroup, FormControl } from 'react-bootstrap';




const Register =()=> {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmEmail, setConfirmEmail] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  let navigate = useNavigate();
  const [user,setUser] = useState({
      
      'firstname':'',
      'lastname':'',

      'email':'',
      'password':''
      
  })

  const onClick = async (event) =>{
      event.preventDefault();
      console.log(user);
      if(user.email !== "" && user.password !== ""){
          const res = await register(user);
          if (res.status === 200)
          { 
              localStorage.setItem("userEmail", user.email)
              localStorage.setItem("userId", user.id)
              localStorage.setItem("userFirstname", user.firstname)
              localStorage.setItem("userLastname", user.lastname)
              
              navigate("/Login");
          }
          console.log(res);
      }else{
          console.log('Error');
      }
      
  }

 

  const onChangeHandler = (event) =>{
    const {id,value}= event.target
    setUser({...user,[id]:value})
}

  return (
    <Form >
        <FormGroup>
        <Form.Label>First Name</Form.Label>
        <FormControl
          type="text"
          onChange={onChangeHandler} 
          value={user.firstname}
           placeholder="Enter your firstname"
           id="firstname"
        />
      </FormGroup>
      <FormGroup>
        <Form.Label>Last Name</Form.Label>
        <FormControl
          type="text"
           onChange={onChangeHandler} 
           value={user.lastname}
            placeholder="Enter your lastname"
            id="lastname"
        />
      </FormGroup>
      <FormGroup>
        <Form.Label>Email</Form.Label>
        <FormControl
          type="text" 
          onChange={onChangeHandler} 
          value={user.email} 
          placeholder="Enter your email"
          id="email"
        />
      </FormGroup>
      
      <FormGroup>
        <Form.Label>Password</Form.Label>
        <FormControl
           type="password"
            onChange={onChangeHandler}
             value = {user.password}
              placeholder="Enter your password"
               id="password"
        />
      </FormGroup>
      
      <Button variant="primary" type="submit" onClick={onClick}>
        Register
      </Button>
    </Form>
  );
}

export default Register
