import React from "react";
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from "../../graphql/types";

interface loginData {
    id: number;
    email: string;
    remember_token: string;
    api_token: string;
}

const Login = () => {

    const [loginMutation] = useMutation<{ login: loginData },{ email: string, password: string }> (LOGIN_MUTATION, {
    	variables: { email: "aminnoura@gmail.com", password: "password" }
  	});
    return (
        <div>
            <h1>Login</h1>           
          </div>
      );
}

export default Login;