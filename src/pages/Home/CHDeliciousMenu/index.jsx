import { Col, Container, Image, Row } from "react-bootstrap";
import clsx from "clsx";
import styles from "./CHDeliciousMenu.module.css";
import { menuDishesData } from "../../../constant/data";
import { useTranslation } from "react-i18next";

export const CHDeliciousMenu = () => {
  const { t } = useTranslation();
  return (
    <>
      <section
        className={clsx(styles.menuSection, "section-py")}
        id="deliciousMenuSection"
      >
        <Container>
          <div>
            <span className="primary-title d-block mb-4">
              {t("endroitLabel")}
            </span>
            <h2 className="secondary-title">{t("SpecLabel")}</h2>
          </div>
          <div className={styles.menuDishesWrapper}>
            <Row className="g-4">
              {menuDishesData.map((dish, index) => {
                return (
                  <Col sm={6} lg={4} key={index}>
                    <a href="#contactUsSection" className="d-block h-100">
                      <div
                        className={clsx(
                          styles.menuDishCard,
                          "ch-bg-white h-100  image-hover-scale d-flex flex-column justify-content-between"
                        )}
                      >
                        <div className={styles.dishContentInnerWrap}>
                          <div
                            className={clsx(
                              styles.menuDishImageCard,
                              "w-100 overflow-hidden ratio"
                            )}
                          >
                            <Image
                              src={dish.imgSrc}
                              alt={`dish-img-${index + 1}`}
                              className="w-100 h-100 object-fit-cover"
                            />
                            {/* <div className="h6 bg-dugong ch-text-white d-flex justify-content-center align-items-center w-100 h-100">376x325</div> */}
                          </div>
                          <div className={styles.menuDishContentCard}>
                            <div>
                              <h5
                                className={clsx(
                                  styles.dishName,
                                  "text-jet fw-bold font-josefin text-ellipsis line-clamp-3"
                                )}
                              >
                                {t(dish.dishName)}
                              </h5>
                              <p className="text-ellipsis text-shadowed-steel line-clamp-4">
                                {t(dish.description)}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between gap-2 align-items-center"></div>
                      </div>
                    </a>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};
