// Libraries
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// CSS
import "./css/App.css";

// Images
import bg_1 from "./resources/images/bg_1.svg";
import bg_2 from "./resources/images/bg_2.svg";
import bg_3 from "./resources/images/bg_3.svg";
import bg_4 from "./resources/images/bg_4.svg";
import bg_5 from "./resources/images/bg_5.svg";
import bg_6 from "./resources/images/bg_6.svg";
import bg_7 from "./resources/images/bg_7.svg";
import bg_8 from "./resources/images/bg_8.svg";
import bg_9 from "./resources/images/bg_9.svg";
import bg_10 from "./resources/images/bg_10.svg";
import bg_11 from "./resources/images/bg_11.svg";
import bg_12 from "./resources/images/bg_12.svg";

// Pages
import Homepage from "./pages/homepage/Homepage";
import UnmatchedRoute from "./pages/homepage/UnmatchedRoute";
import BooksRoutes from "./pages/books/BooksRouting";
import CodeRoutes from "./pages/code/CodeRouting";

function App() {
  const bg_image_paths = [bg_1, bg_2, bg_3, bg_4, bg_5, bg_6, bg_7, bg_8, bg_9, bg_10, bg_11, bg_12];

  let random = Math.floor(Math.random() * bg_image_paths.length);
  document.querySelector("body").style.backgroundImage = `url(${bg_image_paths[random]})`;
  document.querySelector("html").style.backgroundImage = `url(${bg_image_paths[random]})`;

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
        <Route path="/Code">
          <CodeRoutes />
        </Route>
        {/* Books page */}
        <Route path="/Books">
          <BooksRoutes />
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
