import React from "react";

import Home from "./components/Home/Home";
import NovaCotacao from "./components/NovaCotacao/NovaCotacao"

import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <main>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/novaCotacao' component={NovaCotacao} />
    </Switch>
  </main>  
);

export default Main;
