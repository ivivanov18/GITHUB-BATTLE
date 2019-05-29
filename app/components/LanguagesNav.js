import React from "react";
import PropTypes from "prop-types";

LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onSelectLanguage: PropTypes.func.isRequired
};

function LanguagesNav({ onSelectLanguage, selected }) {
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
        <li key={language}>
          <button
            style={language === selected ? { color: "teal" } : null}
            className="btn-clear nav-link"
            onClick={() => onSelectLanguage(language)}
          >
            {language}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default LanguagesNav;
