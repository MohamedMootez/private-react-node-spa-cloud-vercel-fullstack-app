

import { useTranslation } from "react-i18next";
import './TopNavigationBar.css';
import { elWaeedLogo } from "../../../constant/imageData";
import {CHInscription} from "../../../components/CHInscription/index.jsx"
import { CHLanguage } from '../../../components/CHLanguage/index.jsx';
export const TopNavigationBar = () => {
  const { t } = useTranslation();
  return (
    <>
  
   <div className="hero">

   <a href="#_heroSection_syk8k_1"><img  className="elWaeedLogo" src={elWaeedLogo} alt="" /> </a> 
    <div className="isar">
      <a className="active" href="#_heroSection_syk8k_1">{t("aceuilleLabel")}</a>
      <a href="#_CHDiscoverSection_424bv_1">{t("Sûr-ceLabel")}</a>
      <a href="#contactUsSection">Contact</a>
    </div>
    <div className="imin">
       {/* <a href="#contactUsSection">Inscription</a> */}
       <CHInscription></CHInscription>
       <CHLanguage></CHLanguage>
    </div>
   </div>


    </>
  );
};
