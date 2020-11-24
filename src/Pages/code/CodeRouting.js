// Libraries
import { Switch, Route, useRouteMatch } from "react-router-dom";

// Pages
import CodeHomepage from "./CodeHomepage";

export default function BooksRouting() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <CodeHomepage />
      </Route>
      <Route path={`${path}/:codeid/:codedoc`}>
        <CodeHomepage />
      </Route>
    </Switch>
  );
}
