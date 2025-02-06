import { useTranslation } from "react-i18next";
import "./TopNavigationBar.css";
import { elWaeedLogo } from "../../../constant/imageData";
import { CHInscription } from "../../../components/CHInscription/index.jsx";
import { CHLanguage } from "../../../components/CHLanguage/index.jsx";
import { useState } from "react";

export const TopNavigationBar = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="hero">
      <a href="#_heroSection_syk8k_1">
        <img className="elWaeedLogo" src={elWaeedLogo} alt="El Waeed Logo" />
      </a>

      {/* Hamburger menu for mobile view */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Dropdown menu */}
      <div className={`isar ${menuOpen ? "open" : ""}`}>
        <a
          className="active"
          href="#_heroSection_syk8k_1"
          onClick={() => setMenuOpen(false)}
        >
          {t("aceuilleLabel")}
        </a>
        <a
          href="#_CHDiscoverSection_424bv_1"
          onClick={() => setMenuOpen(false)}
          className="surceLabel"
        >
          {t("Sûr-ceLabel")}
        </a>

        <div className="imin">
          <CHInscription />
          <CHLanguage />
        </div>
      </div>
    </div>
  );
};
