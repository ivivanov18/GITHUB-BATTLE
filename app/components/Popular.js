import React, { Component } from "react";

import LanguagesNav from "./LanguagesNav";

class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "All"
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(selectedLanguage) {
    this.setState({ selectedLanguage });
  }

  render() {
    return (
      <LanguagesNav
        onSelectLanguage={this.updateLanguage}
        selected={this.state.selectedLanguage}
      />
    );
  }
}

export default Popular;
