import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Professors from "./components/Professors";
import Information from "./components/Information";

function App() {
  return (
    <Router>
      <div id="top">
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/professors/" component={Professors} />
          <Route exact path="/information/" component={Information} />
          <Route exact path="/contact/" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
