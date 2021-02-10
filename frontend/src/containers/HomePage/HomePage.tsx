import React, { useEffect } from "react";
import { useMutation, gql } from '@apollo/client';


const LOGIN_MUTATION = gql`
 	 mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			id
			email
			remember_token
			api_token
		}
  	}
`;

const LOGOUT_MUTATION = gql`
	mutation logout {
		logout {
			id
		}
	}
`;

interface loginData {
    id: number;
    email: string;
    remember_token: string;
    api_token: string;
}

interface logoutData {
    id: number;
}

const HomePage = () => {

    const [loginMutation] = useMutation<{ login: loginData },{ email: string, password: string }> (LOGIN_MUTATION, {
    	variables: { email: "aminnoura@gmail.com", password: "password" }
  	});

	const [logoutMutation] = useMutation<{ logout: logoutData },{}> (LOGOUT_MUTATION);

	const logoutHandler = () => {
		logoutMutation()
		.then( ({data})=>{
			console.log(data);
			localStorage.removeItem('token');
		})
		.catch(err=> {
			console.log(err);
		})
	}

  	useEffect( () => {
		loginMutation()
		.then( ({data}) =>{
			console.log(data)
			if (data) {
			localStorage.setItem('token',data.login.api_token)
			}
		}).catch(err=>{
			console.log(err);
		})
  	},[loginMutation]);

    return (
      <div>
          <h1>Home Page</h1>           
          <button onClick={logoutHandler}>check</button>
        </div>
    );
}

export default HomePage;
