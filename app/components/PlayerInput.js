import React, { useState, useContext } from "react";
import { ThemeContext } from "./theme";

function PlayerInput({ label, onSubmit }) {
  const [input, setInput] = useState("");
  const { theme } = useContext(ThemeContext);

  const handleInput = event => {
    event.preventDefault();
    onSubmit(input);
  };

  return (
    <form className="column player" onSubmit={handleInput}>
      <label htmlFor="username" className="player-label">
        {label}
      </label>
      <div className="row player-inputs">
        <input
          value={input}
          type="text"
          id="username"
          className={theme === "light" ? "input-light" : "input-dark"}
          placeholder="github username"
          autoComplete="off"
          onChange={evt => setInput(evt.target.value)}
        />
        <button
          className={`btn ${theme === "dark" ? "light-btn" : "dark-btn"}`}
          type="submit"
          disabled={!input}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default PlayerInput;
