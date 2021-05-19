import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import RedirectUser from "./pages/RedirectUser";

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path="/">
            <Home />
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
