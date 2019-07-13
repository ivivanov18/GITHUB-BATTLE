import React, { useState } from "react";

function PlayerInput({ label, onSubmit }) {
  const [input, setInput] = useState("");

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
          className="input-light"
          placeholder="github username"
          autoComplete="off"
          onChange={evt => setInput(evt.target.value)}
        />
        <button className="btn dark-btn" type="submit" disabled={!input}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default PlayerInput;
