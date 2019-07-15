import React, { useContext } from "react";
import { FaTimesCircle } from "react-icons/fa";
import { ThemeContext } from "./theme";

function PlayerPreview({ username, onReset, label }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="column player">
      <h3 className="player-label">{label}</h3>
      <div className={`row bg-${theme}`}>
        <div className="player-info">
          <img
            className="avatar-small"
            src={`https://github.com/${username}.png?size=200`}
            alt={`Avatar for ${username}`}
          />
          <a href={`https://github.com/${username}`} className="link">
            {username}
          </a>
          <button className="btn-clear flex-center" onClick={onReset}>
            <FaTimesCircle color="rgb(194, 57, 42)" size={26} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default PlayerPreview;
