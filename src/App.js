import React, { Component } from "react";
import "./resources/styles.css";
import { Element } from "react-scroll";
import Header from "./components/header/Header";
import Featured from "./components/featured/index";
import VenueNFO from "./components/venueNFO/VenueNFO";
import Highlights from "./components/highlights/Highlights";
import Pricing from "./components/pricing/Pricing";
import Location from "./components/Location/Location";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "300vh" }}>
        <Header />
        <Element name="featured">
          <Featured />
        </Element>
        <Element name="venueNFO">
          <VenueNFO />
        </Element>
        <Element name="highlights">
          <Highlights />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
