import React, { Component } from "react";
import "./resources/styles.css";
import Header from "./components/header/Header";
import Featured from "./components/featured/index";
import VenueNFO from "./components/venueNFO/VenueNFO";
import Highlights from "./components/highlights/Highlights";
import Pricing from "./components/pricing/Pricing";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "300vh" }}>
        {" "}
        <Header />
        <Featured />
        <VenueNFO />
        <Highlights />
        <Pricing />
      </div>
    );
  }
}

export default App;
