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

export const CHLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="LanguageButton">
      <button className="LanguageButtons" onClick={() => changeLanguage("en")}>
        🇬🇧
      </button>
      <button className="LanguageButtons" onClick={() => changeLanguage("fr")}>
        🇫🇷
      </button>
      <button className="LanguageButtons" onClick={() => changeLanguage("ar")}>
        🇹🇳
      </button>
    </div>
  );
};
