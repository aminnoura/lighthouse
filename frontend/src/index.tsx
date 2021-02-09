import React from "react";
import ReactDOM from "react-dom";
import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
    ApolloProvider
  } from "@apollo/client";
  import { setContext } from '@apollo/client/link/context';


import App from "./App";

export const link = createHttpLink({
    uri: "http://localhost:8000/graphql",
    credentials: 'same-origin'
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `${token}` : "",
      }
    }
});

const client = new ApolloClient({
    link: authLink.concat(link),
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>,
    document.getElementById("root") as HTMLElement,
);
