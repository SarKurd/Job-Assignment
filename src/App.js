import React, { Component } from "react";
import { Header, Footer, Home, People, Contact } from "./Components";
import { Route } from "react-router-dom";
import "./Styles/components/app.scss";

class App extends Component {
  render() {
    return (
      <div style={{ boxSizing: "border-box" }}>
        <Header />
        <div className="background-img" />

        <Route exact path="/" component={Home} />
        <Route path="/people" component={People} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    );
  }
}

export default App;
