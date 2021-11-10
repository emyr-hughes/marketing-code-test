import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

const GlobalStyles = createGlobalStyle`
  body {
    background: #050F2A;
    margin: 0;
    font-family: 'Gotham SSm A','Gotham SSm B',helvetica,arial,sans-serif;
    font-size: calc(0.6em + 1vw);
    padding-top: 0.4em;
    color: white;
  }
`;

const client = new ApolloClient({
  uri: "http://127.0.0.1:8000/graphql",
  cache: new InMemoryCache(),
});

const ApolloApp = (AppComponent: () => JSX.Element) => (
  <body>
    <GlobalStyles />
    <ApolloProvider client={client}>
      <AppComponent />
    </ApolloProvider>
  </body>
);

ReactDOM.render(ApolloApp(App), document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
