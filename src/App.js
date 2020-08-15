import React, {useState} from 'react';

import {Route, Link, Switch} from 'react-router-dom'
import MainNavbar from "./components/MainNavbar"
import Homepage from "./components/Homepage"
import Pizzaform from "./components/Pizzaform"
import Confirmation from './components/Confirmation';




function App() {

  return (
    <div className="App">
        <Route>
          <MainNavbar/>
        </Route>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/pizza" component={Pizzaform}></Route>
        <Route path="/confirmation" component={Confirmation}></Route>
    </div>
  );
}

export default App;