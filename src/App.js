// Libraries
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// CSS
import "./css/App.css";

// Pages
import Homepage from "./pages/homepage/Homepage";
import UnmatchedRoute from "./pages/homepage/UnmatchedRoute";

function App() {
  return (
    <Router>
      <Switch>
        {/* Main homepage */}
        <Route path="/" exact>
          <Homepage />
        </Route>

        {/* 404 Route */}
        <Route>
          <UnmatchedRoute />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
