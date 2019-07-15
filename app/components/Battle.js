import React, { useState, useContext } from "react";
import Instructions from "./Instructions";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";
import Results from "./Results";
import ThemeToggler from "./ThemeToggler";
import { ThemeContext } from "./theme";

function Battle() {
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [battle, setBattle] = useState(false);
  const { theme } = useContext(ThemeContext);

  const submitName = evt => {};

  const resetBattle = () => {
    setPlayerOne("");
    setPlayerTwo("");
    setBattle(false);
  };

  if (battle === true) {
    return (
      <Results
        playerOne={playerOne}
        playerTwo={playerTwo}
        onReset={resetBattle}
      />
    );
  }

  return (
    <React.Fragment>
      <Instructions />
      <div className="players-container">
        <h1 className="center-text header-lg">Players</h1>
        <div className="row space-around">
          {playerOne === "" ? (
            <PlayerInput
              label="Enter Player 1"
              onSubmit={name => {
                setPlayerOne(name);
              }}
            />
          ) : (
            <PlayerPreview
              username={playerOne}
              label="Player One"
              onReset={() => {
                setPlayerOne("");
              }}
            />
          )}
          {playerTwo === "" ? (
            <PlayerInput
              label="Enter Player 2"
              onSubmit={name => {
                setPlayerTwo(name);
              }}
            />
          ) : (
            <PlayerPreview
              username={playerTwo}
              label="Player Two"
              onReset={() => {
                setPlayerTwo("");
              }}
            />
          )}
        </div>
        {playerOne && playerTwo && (
          <button
            className={`btn btn-space ${
              theme === "light" ? "light-btn" : "dark-btn"
            }`}
            onClick={() => setBattle(true)}
          >
            Battle
          </button>
        )}
      </div>
    </React.Fragment>
  );
}

export default Battle;
