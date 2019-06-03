import React, { Component } from "react";
import ReactDOM from "react-dom";
import Popular from "./components/Popular";
import Battle from "./components/Battle";
// import "./normalize.css";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Battle />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
