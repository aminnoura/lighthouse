import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from "../../graphql/types";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import './Login.scss';
import { useHistory } from "react-router-dom";

interface loginData {
    id: number;
    email: string;
    remember_token: string;
    api_token: string;
}

const Login = () => {
    const history = useHistory();
    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [loginMutation] = useMutation<{ login: loginData },{ email: string, password: string }> (LOGIN_MUTATION, {
    	variables: { email: email, password: password }
  	});
    const handleLogin = (e: Event) => {
        e.preventDefault();
        loginMutation()
        .then( ({data})=>{
            if (data && data.login){
            localStorage.setItem('token',data.login.api_token);
            history.push('/profile');
        }
        })
        .catch(()=> {
            setError("invalid email or password, please try again.");
        })
      }
    return (
        <div className="generalContainer1 loginContainer1">
			<div className="generalContainer2 loginContainer2">
                <span className="breadcrumb">Main  &gt;  Login</span>
                <form className="formContainer">
                    <div className="labelAndInputContainer">
                        <label className="inputLabel" htmlFor="user">Email:</label>
                        <Input className="formInput" id="user" onChange={setEmail} text={email} />
                    </div>
                    <div className="labelAndInputContainer">
                        <label className="inputLabel" htmlFor="password">Password:</label>
                        <Input className="formInput" id="password" onChange={setPassword} text={password}/>
                    </div>
                    {error && <span className="errorSpan" >{error}</span>}
                    <Button className="submitBtn" text="submit" onClick={handleLogin} />

                </form>
            </div>
        </div>
    );
}

export default Login;