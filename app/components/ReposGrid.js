import React from "react";
import PropTypes from "prop-types";
import Repo from "./Repo";

function ReposGrid({ repos }) {
  return (
    <ul className="grid space-around">
      {repos.map((repo, index) => {
        const {
          name,
          owner,
          html_url,
          stargazers_count,
          forks,
          open_issues
        } = repo;
        const { login, avatar_url } = owner;

        return (
          <Repo
            key={name}
            index={index}
            html_url={html_url}
            login={login}
            avatar_url={avatar_url}
            open_issues={open_issues}
            forks={forks}
            stargazers_count={stargazers_count}
          />
        );
      })}
    </ul>
  );
}

ReposGrid.propTypes = {
  repos: PropTypes.array.isRequired
};

export default ReposGrid;
