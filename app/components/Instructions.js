import React, { useContext } from "react";
import { FaUserFriends, FaFighterJet, FaTrophy } from "react-icons/fa";
import { ThemeContext } from "./theme";

function Instructions() {
  const { theme } = useContext(ThemeContext);
  return (
    <React.Fragment>
      <div className="title">Instructions</div>
      <div className="instructions-container">
        <div className="instruction">
          <h2>Enter two Github users</h2>
          <div className="icon">
            <FaUserFriends
              className={`bg-${theme}`}
              size={140}
              color="#feca57"
            />
          </div>
        </div>
        <div className="instruction">
          <h2>Battle</h2>
          <div className="icon">
            <FaFighterJet
              className={`bg-${theme}`}
              size={140}
              color="#576574"
            />
          </div>
        </div>
        <div className="instruction">
          <h2>See the winner</h2>
          <div className="icon">
            <FaTrophy className={`bg-${theme}`} size={140} color="#f6e58d" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Instructions;
