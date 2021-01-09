import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../router/Home";
import Detail from "../router/Detail";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route path="/:id" component={Detail}/>
    </Router>
  );
}

export default App;
