import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from './RH-color-logo.png';
import Main from "./pages/Main";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import CustomNavbar from './components/Navbar';
import Wrapper from "./components/Wrapper";
import CustomFooter from './components/Footer';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <CustomFooter />
      </div>
    </Router>
  );
}

export default App;
