import { useState } from "react";
import ValidateEmail from "../Helpers/Validate";
import Cookies from 'js-cookie';
import {
  LoginDiv,
  LoginInputContainer,
  LoginLabelField,
  LoginInputField,
  LoginButton,
  LoginFormStyle1,
} from "./StyledComponent";

const LoginForm = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('');
  const [validError, setValidError] = useState('')
  

  const userHandler = (e) => {
    setUserName(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitSuccess = (jwt) => {
    const {history} = props 
    Cookies.set('jwt_token', jwt, {expires:30})
    history.replace('/')
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    const userInfo = {
      email:userName,
      password:password
    }
    console.log(userInfo)
    
    const emailValidation = ValidateEmail(userInfo.email) 
    if (emailValidation) {
      setErrorEmail("Please Enter a Valid Email");
      return
    }
    else  {
      setErrorEmail('')
    }

    if (password.length<5) {
        setErrorPassword("Your Entered Password is not Valid")
        return 
    }
    else {
      setErrorPassword("")
    }


 
  
  
    
    console.log(userInfo)
    fetchUser(userInfo)
   
   
  };

  const fetchUser = async (userDetails) => {
    const url = `http://localhost:8081/api/auth/login`
    const options = {
      method:"POST",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify(userDetails)
    }
    const response = await fetch(url,options);
    if (response.ok) {
      const data = await response.json(); 
      //console.log(data)
      submitSuccess(data.jwt_token)
      
    }
    else{
      const data = await response.json();
        setValidError(data.error.message)
    }
    console.log(validError)
    
    
  }

  return (
    <LoginDiv className="d-flex  ">
      <div>
        <h1>CRUD OPERATIONS</h1>
      </div> 
   
      <LoginFormStyle1 onSubmit={submitHandler} >
        <LoginInputContainer>
          <LoginLabelField htmlFor="userName">User Email</LoginLabelField>
          <LoginInputField
            type="text"
            id="userName"
            value={userName}
            onChange={userHandler}
          />
          {errorEmail && <p>{errorEmail}</p>}
        </LoginInputContainer>
        <LoginInputContainer>
          <LoginLabelField htmlFor="password">Password</LoginLabelField>
          <LoginInputField
            type="password"
            id="password"
            value={password}
            onChange={passwordHandler}
          />
          {errorPassword && <p>{errorPassword}</p>}
        </LoginInputContainer>

        <LoginButton type="submit" className="btn btn-primary">
          Login
        </LoginButton>
        {validError && <p>{validError}</p>}
      </LoginFormStyle1>
      
    </LoginDiv>
  );
};

export default LoginForm;
