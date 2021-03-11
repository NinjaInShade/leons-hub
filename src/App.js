// Libraries
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { backgrounds } from "./util/backgrounds";
import Homepage from "./Pages/homepage/Homepage";
import UnmatchedRoute from "./Pages/homepage/UnmatchedRoute";
import BooksRoutes from "./Pages/books/BooksRouting";
import CodeRoutes from "./Pages/code/CodeRouting";
import Settings from "./Pages/settings/Settings";

import "./css/App.css";

function App() {
  // Randomly selects a different background image
  useEffect(() => {
    // Random int between 0 and length of bg image array
    const random = Math.floor(Math.random() * backgrounds.length);

    document.querySelector("body").style.backgroundImage = `url(${backgrounds[random]})`;
  }, []);

  return (
    <Router>
      <Switch>
        {/* Main homepage */}
        <Route path="/" exact>
          <Homepage />
        </Route>
        {/* About page */}
        <Route path="/About" exact>
          <Homepage />
        </Route>
        {/* Settings page */}
        <Route path="/Settings" exact>
          <Settings />
        </Route>
        {/* Code docs page */}
        <Route path="/Code">
          <CodeRoutes />
        </Route>
        {/* Books page */}
        <Route path="/Books">
          <BooksRoutes />
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
