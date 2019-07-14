import React, { useEffect, useState } from "react";
import { battle } from "../utils/api";
import Card from "./Card";
import ProfileList from "./ProfileList";
import Loading from "./Loading";

function Results({ playerOne, playerTwo, onReset }) {
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
    return <Loading />;
  }

  if (error) {
    return <div className="center-text error">{error}</div>;
  }

  return (
    <React.Fragment>
      <div className="grid space-around container-sm">
        <Card
          header={winner.score === looser.score ? "Tie" : "Winner"}
          subheader={winner.score.toLocaleString()}
          avatar={winner.profile.avatar_url}
          href={winner.profile.html_url}
          name={winner.profile.login}
        >
          <ProfileList profile={winner.profile} />
        </Card>
        <Card
          header={winner.score === looser.score ? "Tie" : "Looser"}
          subheader={looser.score.toLocaleString()}
          avatar={looser.profile.avatar_url}
          href={looser.profile.html_url}
          name={looser.profile.login}
        >
          <ProfileList profile={looser.profile} />
        </Card>
      </div>
      <button className="btn dark-btn btn-space" onClick={() => onReset()}>
        Battle again
      </button>
    </React.Fragment>
  );
}

export default Results;
