// import '../../pages/Home/TopNavigationBar/TopNavigationBar.css';
// import { useTranslation } from "react-i18next";
// export const CHInscription= () => {
//   const { t } = useTranslation();
//     const scrollToSection = () => {
//       const section = document.getElementById("contactUsSection");
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth" });
//       }
//     };

//     return (
//       <div>
//         <button onClick={scrollToSection} className="scroll-button">
//         {t("inscriLabel")}
//         </button>
//       </div>
//     );
// }
import { useTranslation } from "react-i18next";
import "../../pages/Home/TopNavigationBar/TopNavigationBar.css";

export const CHInscription = () => {
  const { t } = useTranslation();

  const scrollToSection = () => {
    const section = document.getElementById("contactUsSection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <button onClick={scrollToSection} className="scroll-button">
        {t("inscriLabel")}
      </button>
    </div>
  );
};
