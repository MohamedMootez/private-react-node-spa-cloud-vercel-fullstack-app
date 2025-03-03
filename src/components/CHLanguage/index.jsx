import Flags from "react-world-flags";
import { useTranslation } from "react-i18next";
import "./CHLanguage.css";

export const CHLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
      <button className="language-btn" onClick={() => changeLanguage("en")}>
        <Flags code="GB" className="flag-icon" />
      </button>
      <button className="language-btn" onClick={() => changeLanguage("fr")}>
        <Flags code="FR" className="flag-icon" />
      </button>
      <button className="language-btn" onClick={() => changeLanguage("ar")}>
        <Flags code="TN" className="flag-icon" />
      </button>
    </div>
  );
};
