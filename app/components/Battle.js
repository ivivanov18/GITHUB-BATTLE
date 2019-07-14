import React, { useState } from "react";
import Instructions from "./Instructions";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";
import Results from "./Results";

function Battle() {
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [battle, setBattle] = useState(false);

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
            className="btn dark-btn btn-space"
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
