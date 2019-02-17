import React, { Component } from "react";
import "./resources/styles.css";
import Header from "./components/header/Header";
import Featured from "./components//featured/index";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "300vh", background: "orangered" }}>
        {" "}
        <Header />
        <Featured />
      </div>
    );
  }
}

export default App;
