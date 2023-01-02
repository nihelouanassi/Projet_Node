import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {login} from "../services/user";

const Login = () =>{

    let navigate = useNavigate();
    const [messages,setMessages] = useState([]);
    const [user,setUser] = useState({
        'email':'',
        'password':''
    });

    const onClick = async (event) =>{
        event.preventDefault();
        console.log(user);
        setMessages([])
        if(user.password !== "" && user.email !== ""){
            try{
                const userData = await login(user);
                setMessages([...messages,{type:"alert alert-success",msg:"vous êtes connecté !"}]);

                localStorage.setItem("userEmail", user.email)
                localStorage.setItem("userId", userData.user.id)
                navigate("/Posts");
            }catch (error){
                if (error.response){
                    setMessages([...messages,{type:"alert alert-danger",msg:error.response.data}]);
                }else{
                    setMessages([...messages,{type:"alert alert-danger",msg:"erreur : "+error.message}]);
                }
            }
        }else{
            setMessages([...messages,{type:"alert alert-info",msg:"merci de remplir les deux champs "}]);
        }
    }

    const onChangeHandler = (event) =>{
        const {id, value}= event.target
        setUser({...user, [id]:value})
    }



  return (
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={onChangeHandler} value={user.email} id="email"/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={onChangeHandler} value = {user.password} id="password"/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={onClick}>
        Submit
      </Button>
    </Form>
  );
}

export default Login;