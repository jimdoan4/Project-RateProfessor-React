
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { Link } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from './components/Footer'
import Professors from "./components/Professors";
import Information from "./components/Information";

function App() {
  return (
    <Router>
  
    <div className="" id="top">
<nav id="navbar" class="navbar navbar-expand-lg navbar-dark fixed-top" style={{marginTop: "0px", height: "70px"}}>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">

    <ul class="navbar-nav ml-auto text-center center-nav-links">
        <li class="nav-item">
            <Link to="/" class="nav-link btn">HOME</Link>
          </li>
      <li class="nav-item ">
      <Link to="/apparels/" class="nav-link btn" >RATE A PROFESSOR</Link>
      </li>
      <li class="nav-item">
        <Link to="/information/" class="nav-link btn" >INSURANCE</Link>
      </li>
<div class="">
      <li class="nav-item">
        <Link to="/contact/" class="nav-link btn">CONTACT US</Link>
      </li>
    </div>
    </ul>

  </div>
</nav>

<nav id="navbar" class="navbar navbar-expand-lg navbar-dark fixed-top" style={{height: "60px", background: "#394475", color: "white", marginTop: "70px"}}>
  <h3 class="text-center" style={{margin: "auto", marginTop: "5px"}}>FIND WHAT YOU ARE LOOKING FOR
  </h3>
</nav>


 <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/apparels/" component={Professors} />
            <Route exact path="/information/" component={Information} />
            <Route exact path="/contact/" component={Contact} />
          </Switch>
          <Footer/>
        </div>
      </Router>
  
  );
}

export default App;
