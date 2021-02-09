import React from "react";
import ReactDOM from "react-dom";
import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
    ApolloProvider
  } from "@apollo/client";

import App from "./App";

export const link = createHttpLink({
    uri: "http://localhost:8000/graphql"
});

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>,
    document.getElementById("root") as HTMLElement,
);
