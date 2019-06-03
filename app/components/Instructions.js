import React from "react";
import { FaUserFriends, FaFighterJet, FaTrophy } from "react-icons/fa";

function Instructions() {
  return (
    <React.Fragment>
      <div className="title">Instructions</div>
      <div className="instructions-container">
        <div className="instruction">
          <h2>Enter two Github users</h2>
          <div className="icon">
            <FaUserFriends size={140} color="#feca57" />
          </div>
        </div>
        <div className="instruction">
          <h2>Battle</h2>
          <div className="icon">
            <FaFighterJet size={140} color="#576574" />
          </div>
        </div>
        <div className="instruction">
          <h2>See the winner</h2>
          <div className="icon">
            <FaTrophy size={140} color="#f6e58d" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Instructions;
