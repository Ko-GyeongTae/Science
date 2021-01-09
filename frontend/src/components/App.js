import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Atoms from "./Atoms";
//import Detail from "../routes/Detail";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Atoms} />
      
    </Router>
  );
}

export default App;