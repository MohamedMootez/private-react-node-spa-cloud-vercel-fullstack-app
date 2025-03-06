import { Container } from "react-bootstrap";

import clsx from "clsx";
import { restaurantTimeMap } from "../../constant/data";
import styles from "./CHFooter.module.css";
import { useTranslation } from "react-i18next";
const socialLinks = [
  {
    socialLink: "https://www.facebook.com/profile.php?id=100063640526937  ",
    socialIconName: <i className="bi bi-facebook"></i>,
  },
  {
    socialLink:
      "https://www.instagram.com/explore/locations/1002010329940601/centre-de-formation-elwaeed/",
    socialIconName: <i className="bi bi-instagram"></i>,
  },
  {
    socialLink: "https://youtube.com/yourchannel",
    socialIconName: <i className="bi bi-youtube"></i>,
  },
];

export const CHFooter = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer className={clsx(styles.footerSection, "section-pt")}>
        <div className={clsx(styles.footerGridWrap, "d-grid section-pb")}>
          <div className={styles.footerDetailsCard}>
            <span className="d-block fw-bold ch-text-white line-height-normal text-uppercase">
              {t("adressLabel")}
            </span>
            <a
              href="https://www.google.de/maps/place/Av.+de+L%E2%80%99ind%C3%A9pendance,+Tunesien/@36.8022498,10.1021202,17z/data=!3m1!4b1!4m6!3m5!1s0x12fd323f8b4dae5d:0x6d8ea6ebd63cdac5!8m2!3d36.8022455!4d10.1046951!16s%2Fg%2F1tf12svn?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="fw-normal ch-text-white line-height-normal"
            >
              {t("adresse")}
            </a>
          </div>
          <div className={styles.footerDetailsCard}>
            <span className="d-block fw-bold ch-text-white line-height-normal text-uppercase">
              {t("openTimeLabel")}
            </span>
            {restaurantTimeMap.map((restaurantItem, restaurantIndex) => {
              return (
                <div
                  className="timeDayCard d-flex gap-3 align-items-center justify-content-center"
                  key={restaurantIndex}
                >
                  <div className="d-flex gap-3">
                    <strong className="ch-text-white">
                      {t(restaurantItem.restaurantWeek)}
                    </strong>
                    <p className="fw-normal ch-text-white line-height-normal mb-0">
                      {t(restaurantItem.restaurantTime)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.footerDetailsCard}>
            <span className="d-block fw-bold ch-text-white line-height-normal text-uppercase">
              {t("Contact")}
            </span>
            <a
              href="tel:+916382791462"
              className="fw-normal ch-text-white line-height-normal d-block"
            >
              +216 20 504 143
            </a>
            <a
              href="mailto:abcdef@gmail.com"
              className="fw-normal ch-text-white line-height-normal d-block"
            >
              centreelwaeed55@gmail.com
            </a>
          </div>
          <div className={styles.footerDetailsCard}>
            <span className="d-block fw-bold ch-text-white line-height-normal text-uppercase">
              {t("ConnectLabel")}
            </span>
            <ul className="d-flex align-items-center gap-4">
              {socialLinks.map((socialIconItem, socialIndex) => {
                return (
                  <li key={socialIndex}>
                    <a
                      href={socialIconItem.socialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center justify-content-center rounded-circle"
                    >
                      <span className="d-flex justify-content-center align-items-center mb-0">
                        {socialIconItem.socialIconName}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={styles.copyrightWrapper}>
          <span className="p sm d-block text-center ch-text-white">
            {t("copyrights")}
          </span>
        </div>
      </footer>
    </>
  );
};
