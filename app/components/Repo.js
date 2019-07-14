import React from "react";
import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle
} from "react-icons/fa";
import Card from "./Card";

function Repo({
  index,
  avatar_url,
  login,
  html_url,
  stargazers_count,
  forks,
  open_issues
}) {
  return (
    <Card
     header={`#${index + 1}`}
     avatar={avatar_url}
     href={html_url}
     name={login}
     >
      <ul className="card-list">
        <li>
          <FaUser color="rgb(255, 191, 116)" size={22} />
          <a href={`https://github.com/${login}`}>{login}</a>
        </li>
        <li>
          <FaStar color="rgb(255, 215, 0)" size={22} />
          {stargazers_count.toLocaleString()} stars
        </li>
        <li>
          <FaCodeBranch color="rgb(129, 195, 245)" size={22} />
          {forks.toLocaleString()} forks
        </li>
        <li>
          <FaExclamationTriangle color="rgb(241, 138, 147)" size={22} />
          {open_issues.toLocaleString()} open issues
        </li>
      </ul>
    </Card>
  );
}

export default Repo;
