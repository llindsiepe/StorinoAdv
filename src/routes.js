import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import Sobre from "./pages/about";
import Areas from "./pages/areas";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Sobre} path="/sobre" />
      <Route component={Areas} path="/usuario" />
    </BrowserRouter>
  );
};

export default Routes;
