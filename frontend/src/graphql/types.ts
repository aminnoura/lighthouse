import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
 	 mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			id
			email
			remember_token
			api_token
		}
  	}
`;

export const LOGOUT_MUTATION = gql`
	mutation logout {
		logout {
			id
		}
	}
`;

export const PROFILE_MUTATION = gql`
	mutation profile {
		profile {
			id
			email
		}
	}
`;