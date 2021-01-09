import React from "react";
import {ApolloProvider} from "react-apollo";
import Atoms from "./Atoms"
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    //uri: "https://us1.prisma.sh/kokt0203-caefef/Science/dev",
    uri:"http://localhost:4000",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <h1>React + Apollo Cli</h1>
      <Atoms />
    </ApolloProvider>
  );
}

export default App;
