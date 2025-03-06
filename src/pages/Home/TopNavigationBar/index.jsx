import { useState, useEffect, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import "./TopNavigationBar.css";
import { elWaeedLogo } from "../../../constant/imageData";
import { CHInscription } from "../../../components/CHInscription/index.jsx";
import { CHLanguage } from "../../../components/CHLanguage/index.jsx";
import { Menu, X } from "lucide-react";

export const TopNavigationBar = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuOpen((prev) => !prev);
  };

  // Handle click outside to close the menu
  const handleClickOutside = useCallback((e) => {
    // First check if we clicked on the menu or hamburger button
    const isMenuClick = menuRef.current?.contains(e.target);
    const isHamburgerClick = e.target.closest(".hamburger");

    // If the click is outside both the menu and hamburger button, close the menu
    if (!isMenuClick && !isHamburgerClick) {
      setMenuOpen(true);
    }
  }, []);

  // Handle Escape key to close the menu
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") {
      setMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    if (menuOpen) {
      setTimeout(() => {
        document.addEventListener("click", handleClickOutside);
      }, 0);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen, handleClickOutside, handleKeyDown]);

  return (
    <div className="hero" id="hero">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <img className="elWaeedLogo" src={elWaeedLogo} alt="El Waeed Logo" />
      </a>

      {/* Hamburger menu for mobile view */}
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <X size={30} color="#000" />
        ) : (
          <Menu size={30} color="#cba525" />
        )}
      </button>

      {/* Dropdown menu */}
      <div ref={menuRef} className={`isar ${menuOpen ? "open" : ""}`}>
        <a
          href="#"
          role="button"
          tabIndex="0"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMenuOpen(false);
          }}
          className="active"
        >
          {t("aceuilleLabel")}
        </a>
        <a
          href="#_CHDiscoverSection_424bv_1"
          onClick={() => setMenuOpen(false)}
          className="surceLabel"
        >
          {t("surceLabel")}
        </a>

        <div className="imin">
          <CHInscription />
          <CHLanguage />
        </div>
      </div>
    </div>
  );
};
