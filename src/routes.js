import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Cliente from "./pages/Cliente";
import Cadastro from "./pages/Cadastro";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Cliente} />
        <Route path="/new" component={Cadastro} />
      </Switch>
    </BrowserRouter>
  );
}
