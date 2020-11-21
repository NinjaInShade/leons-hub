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
        {/* In built wikipedia */}
        <Route path="/Wikipedia" exact>
          <Homepage />
        </Route>
        {/* Todo page */}
        <Route path="/To-do" exact>
          <Homepage />
        </Route>
        {/* About page */}
        <Route path="/About" exact>
          <Homepage />
        </Route>
        {/* Code docs page */}
        <Route path="/Code" exact>
          <Homepage />
        </Route>
        {/* Books page */}
        <Route path="/Books" exact>
          <Homepage />
        </Route>
        {/* Settings page */}
        <Route path="/Settings" exact>
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
