import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Alert,InputGroup,FormControl} from 'react-bootstrap';
function Login({IsLogin,SetLogin}){
    
   
    const OnLoggin=()=>{
        SetLogin(true);
        
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <form>
                <InputGroup type="text" placeholder="username" >
                <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="User Name" />
                </InputGroup>
                <InputGroup type="text" placeholder="username">
                <FormControl aria-label="Default" type="password" placeholder="password" />
                </InputGroup>
                <Button onClick={OnLoggin}>Login</Button>
            </form>
        </div>
    );
}



export default Login;