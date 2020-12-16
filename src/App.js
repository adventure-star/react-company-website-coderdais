import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Service from "./Service/Service";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Switch>
        <main>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/service" component={Service} />
          <Redirect to="/" />
        </main>
      </Switch>
    </div>
  );
}

export default App;
