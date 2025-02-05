import { useTranslation } from "react-i18next";

import { Container } from "react-bootstrap";
import { clsx } from "clsx";
import { fruitTarte } from "../../../constant/imageData";
import styles from "./CHDiscover.module.css";
import { chefCooking2 } from "../../../constant/imageData";
export const CHDiscover = () => {
  const { t } = useTranslation();
  return (
    <section
      className={clsx("section-py", styles.CHDiscoverSection)}
      id="_CHDiscoverSection_424bv_1"
    >
      <Container>
        <span className="primary-title mb-4 d-block">{t("Sûr-ceLabel")}</span>
        <h2 className="secondary-title">{t("QuiLabel")}</h2>
        <div>
          <div className={styles.storyCard}>
            <div
              className={clsx(
                styles.storyCImgWrap,
                "d-flex w-100 position-relative"
              )}
            >
              <div
                className={clsx(styles.storyImgCard, "ratio position-relative")}
              >
                <img
                  src={chefCooking2}
                  alt="chef"
                  width={"100%"}
                  height={"100%"}
                  className={"object-fit-cover"}
                />
              </div>
              <div
                className={clsx(
                  styles.storySubImgCard,
                  "position-absolute w-100 h-100"
                )}
              >
                {/* <div className="h6 bg-dugong ch-text-white d-flex justify-content-center align-items-center w-100 h-100">387x281</div> */}
                <img
                  src={fruitTarte}
                  alt={"fennel-pasta"}
                  width={"100%"}
                  height={"100%"}
                  className="object-fit-cover"
                />
              </div>
            </div>
            <div className={styles.storyContent}>
              <h3 className="fw-bold font-josefin text-capitalize text-jet mb-5">
                {t("LàléléganceLabel")}
              </h3>
              <p className="text-capitalize text-shadowed-steel lh-16 text-ellipsis line-clamp-5 mb-4">
                <span>{t("FondationLabel")}</span>
                <span>{t("PartenaireLabel")}</span>
                <span>
                  {t("ObjectifLabel")}
                  <span className={styles.highlightText}>
                    {t("DevloperLabel")}{" "}
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
