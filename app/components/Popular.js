import React, { Component } from "react";
import LanguagesNav from "./LanguagesNav";
import ReposGrid from "./ReposGrid";

import { fetchPopularRepos } from "../utils/api";

class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "All",
      error: null,
      repos: {}
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage("All");
  }

  updateLanguage(selectedLanguage) {
    this.setState({ selectedLanguage, error: null });

    if (!this.state.repos[selectedLanguage]) {
      fetchPopularRepos(selectedLanguage)
        .then(data => {
          this.setState(({ repos }) => ({
            repos: {
              ...repos,
              [selectedLanguage]: data
            }
          }));
        })
        .catch(error => {
          console.warn(
            "There was an error fetching the repository. The error is:"
          );
          console.error({ error });
        });
    }
  }

  isLoading() {
    const { selectedLanguage } = this.state;
    return (
      this.state.repos[selectedLanguage] === undefined &&
      this.state.error === null
    );
  }

  render() {
    const { selectedLanguage, repos, error } = this.state;

    return (
      <React.Fragment>
        <LanguagesNav
          onSelectLanguage={this.updateLanguage}
          selected={selectedLanguage}
        />
        {this.isLoading() && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {repos[selectedLanguage] && (
          <ReposGrid repos={repos[selectedLanguage]} />
        )}
      </React.Fragment>
    );
  }
}

export default Popular;
