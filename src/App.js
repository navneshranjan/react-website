import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import vdo from "./components/pages/vdo";
function App() {
  return (
    <Router>
      <Navbar />
      {/* <GoogleLogin /> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/services" component={Services} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/vdo" component={vdo} />
      </Switch>
    </Router>
  );
}

export default App;
