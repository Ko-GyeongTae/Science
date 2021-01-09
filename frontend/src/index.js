import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  //uri: "https://us1.prisma.sh/kokt0203-caefef/Science/dev",
  uri:"http://localhost:4000",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
