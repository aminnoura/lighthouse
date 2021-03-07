import { setContext } from '@apollo/client/link/context';
import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
} from "@apollo/client";

const link = createHttpLink({
    uri: "http://2025chemnitz.com/laravel/graphql",
    credentials: 'same-origin'
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
});

export const client = new ApolloClient({
    link: authLink.concat(link),
    cache: new InMemoryCache()
});