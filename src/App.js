import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RedirectUser from "./pages/RedirectUser";

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/lost">
            <NotFound />
          </Route>
          <Route path="/:slug">
            <RedirectUser />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
