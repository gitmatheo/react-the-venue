import React, { Component } from "react";
import "./resources/styles.css";
import Header from "./components/header/Header";
import Featured from "./components/featured/index";
import VenueNFO from "./components/venueNFO/VenueNFO";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "300vh", background: "orangered" }}>
        {" "}
        <Header />
        <Featured />
        <VenueNFO />
      </div>
    );
  }
}

export default App;
