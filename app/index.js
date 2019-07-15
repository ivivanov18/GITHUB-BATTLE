import React, { Component } from "react";
import ReactDOM from "react-dom";
import Popular from "./components/Popular";
import Battle from "./components/Battle";
import ThemeToggler from "./components/ThemeToggler";
import { ThemeContext } from "./components/theme";

// import "./normalize.css";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "light",
      toggleTheme: this.toggleTheme.bind(this)
    };
  }

  toggleTheme() {
    this.setState(({ theme }) => ({
      theme: theme === "light" ? "dark" : "light"
    }));
  }

  render() {
    const { theme } = this.state;
    return (
      <ThemeContext.Provider value={this.state}>
        <div
          className={`container ${theme === "dark" ? "bg-dark" : "bg-light"}`}
        >
          <ThemeToggler />

          <Battle />
        </div>
      </ThemeContext.Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
