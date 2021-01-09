import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Atoms from "../routes/Atoms";
import Description from "../routes/Description";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Atoms} />
      <Route exact path="/:name" component={Description} />
    </Router>
  );
}

export default App;