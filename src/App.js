// Libraries
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// CSS
import "./css/App.css";

// Pages
import Homepage from "./Pages/homepage/Homepage";
import UnmatchedRoute from "./Pages/homepage/UnmatchedRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>

        <Route>
          <UnmatchedRoute />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
