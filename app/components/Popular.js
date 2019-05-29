import React, { Component } from "react";
class Popular extends Component {
  render() {
    const languages = [
      "All",
      "Javascript",
      "Ruby",
      "Java",
      "CSS",
      "Python",
      "PHP",
      "Shell"
    ];
    return (
      <ul className="flex-center">
        {languages.map(language => (
          <li className="btn-clear nav-link" key="language">
            {language}
          </li>
        ))}
      </ul>
    );
  }
}

export default Popular;
