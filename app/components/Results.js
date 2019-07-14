import React, { useEffect, useState } from "react";
import { battle } from "../utils/api";
import {
  FaCompass,
  FaBriefcase,
  FaUsers,
  FaUserFriends,
  FaCode,
  FaUser
} from "react-icons/fa";

function Results({ playerOne, playerTwo }) {
  const [winner, setWinner] = useState(null);
  const [looser, setLooser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    battle([playerOne, playerTwo])
      .then(players => {
        setWinner(players[0]);
        setLooser(players[1]);
        setError(null);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div className="center-text error">{error}</div>;
  }

  return (
    <div className="grid space-around container-sm">
      <div className="card bg-light">
        <h4 className="header-lg center-text">
          {winner.score === looser.score ? "Tie" : "Winner"}
        </h4>
        <img
          className="avatar"
          src={winner.profile.avatar_url}
          alt={`Avatar fo ${winner.profile.login}`}
        />
        <h4 className="center-text">Score: {winner.score.toLocaleString()}</h4>
        <h2 className="center-text">
          <a className="link" href={winner.profile.html_url}>
            {winner.profile.login}
          </a>
        </h2>
        <ul className="card-list">
          <li>
            <FaUser color="rgb(239,115,115)" size={22} />
            {winner.profile.name}
          </li>
          {winner.profile.location && (
            <li>
              <FaCompass color="rgb(144,115,225)" size={22} />
              {winner.profile.location}
            </li>
          )}
          {winner.profile.company && (
            <li>
              <FaBriefcase color="#795548" size={22} />
              {winner.profile.company}
            </li>
          )}
          <li>
            <FaUsers color="rgb(129,199,245)" size={22} />
            {winner.profile.followers.toLocaleString()} followers
          </li>
          <li>
            <FaUserFriends color="rgb(64,195,1833)" size={22} />
            {winner.profile.following.toLocaleString()} following
          </li>
        </ul>
      </div>
      <div className="card bg-light">
        <h4 className="header-lg center-text">
          {winner.score === looser.score ? "Tie" : "Looser"}
        </h4>
        <img
          className="avatar"
          src={looser.profile.avatar_url}
          alt={`Avatar fo ${looser.profile.login}`}
        />
        <h4 className="center-text">Score: {looser.score.toLocaleString()}</h4>
        <h2 className="center-text">
          <a className="link" href={looser.profile.html_url}>
            {looser.profile.login}
          </a>
        </h2>
        <ul className="card-list">
          <li>
            <FaUser color="rgb(239,115,115)" size={22} />
            {looser.profile.name}
          </li>
          {looser.profile.location && (
            <li>
              <FaCompass color="rgb(144,115,225)" size={22} />
              {looser.profile.location}
            </li>
          )}
          {looser.profile.company && (
            <li>
              <FaBriefcase color="#795548" size={22} />
              {looser.profile.company}
            </li>
          )}
          <li>
            <FaUsers color="rgb(129,199,245)" size={22} />
            {looser.profile.followers.toLocaleString()} followers
          </li>
          <li>
            <FaUserFriends color="rgb(64,195,1833)" size={22} />
            {looser.profile.following.toLocaleString()} following
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Results;
