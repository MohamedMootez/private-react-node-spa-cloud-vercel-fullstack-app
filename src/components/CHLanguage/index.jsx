// import "../../i18n.js"; // Import the i18n configuration
// import { useTranslation } from "react-i18next";
// import "./CHLanguage.css";

// export const CHLanguage = () => {
//   const { i18n } = useTranslation();

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <>
//       <div className="LanguageButton">
//         <button
//           className="LanguageButtons"
//           onClick={() => changeLanguage("en")}
//         >
//           🇬🇧
//         </button>
//         <button
//           className="LanguageButtons"
//           onClick={() => changeLanguage("fr")}
//         >
//           🇫🇷
//         </button>
//         <button
//           className="LanguageButtons"
//           onClick={() => changeLanguage("ar")}
//         >
//           🇹🇳
//         </button>
//       </div>
//     </>
//   );
// };
import "../../i18n.js";
import { useTranslation } from "react-i18next";
import "./CHLanguage.css";
import { Flag } from "react-world-flags";

export const CHLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="LanguageButton">
      <button className="LanguageButtons" onClick={() => changeLanguage("en")}>
        <Flag code="GB" className="w-6 h-6" /> {/* Great Britain */}
      </button>
      <button className="LanguageButtons" onClick={() => changeLanguage("fr")}>
        <Flag code="FR" className="w-6 h-6" /> {/* France */}
      </button>
      <button className="LanguageButtons" onClick={() => changeLanguage("ar")}>
        <Flag code="TN" className="w-6 h-6" /> {/* Tunisia */}
      </button>
    </div>
  );
};
