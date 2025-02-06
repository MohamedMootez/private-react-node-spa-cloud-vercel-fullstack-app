import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";
import { ourSpecialitiesList } from "../../../constant/data";
import styles from "./CHOurSpecialities.module.css";

export const CHOurSpecialities = () => {
  const { t } = useTranslation();
  return (
    <>
      <section
        className={clsx(
          "section-py position-relative",
          styles.ourSpecialitiesSection
        )}
      >
        <Container>
          <span className="primary-title mb-4 d-block text-capitalize">
            {t("endroitLabel")}
          </span>
          <h2 className="secondary-title text-white">{t("SpecLabel")}</h2>
          <div className={styles.ourSpecialitiesGrid}>
            {ourSpecialitiesList &&
              ourSpecialitiesList.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={clsx(
                      styles.specialityFoodImgWrap,
                      "ratio image-hover-scale"
                    )}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      width={"100%"}
                      height={"100%"}
                      className="object-fit-cover"
                    />
                  </div>
                );
              })}
          </div>
        </Container>
      </section>
    </>
  );
};
