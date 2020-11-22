// Libraries
import { Switch, Route, useRouteMatch } from "react-router-dom";

// Pages
import BooksHomepage from "./BooksHomepage";

export default function BooksRouting() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <BooksHomepage />
      </Route>
      <Route path={`${path}/:bookid/:book`}>
        <BooksHomepage />
      </Route>
    </Switch>
  );
}
