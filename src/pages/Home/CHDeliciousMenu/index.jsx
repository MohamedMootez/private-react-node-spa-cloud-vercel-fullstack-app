import { useState } from "react";
import { Col, Container, Image, Row, Modal, Carousel } from "react-bootstrap";
import clsx from "clsx";
import styles from "./CHDeliciousMenu.module.css";
import { menuDishesData } from "../../../constant/data";
import { useTranslation } from "react-i18next";

export const CHDeliciousMenu = () => {
  const { t } = useTranslation();

  // State to control modal visibility
  const [showModal, setShowModal] = useState(false);

  // State to store selected dish details
  const [selectedDish, setSelectedDish] = useState(null);

  // Function to open the modal and set the selected dish
  const handleOpenModal = (dish) => {
    setSelectedDish(dish);
    setShowModal(true);
  };

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
              {menuDishesData.map((dish, index) => (
                <Col sm={6} lg={4} key={index}>
                  <div
                    className={clsx(
                      styles.menuDishCard,
                      "ch-bg-white h-100 image-hover-scale d-flex flex-column justify-content-between"
                    )}
                    onClick={() => handleOpenModal(dish)} // Open modal on click
                    style={{ cursor: "pointer" }} // Indicate clickability
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
                      </div>

                      <div className={styles.menuDishContentCard}>
                        <div>
                          <h5
                            className={clsx(
                              styles.dishName,
                              "text-jet fw-bold text-ellipsis line-clamp-3"
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
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>

      {/* Dish Image Gallery Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedDish ? t(selectedDish.dishName) : ""}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {selectedDish &&
          selectedDish.images &&
          selectedDish.images.length > 0 ? (
            <Carousel
              prevIcon={
                <span className="custom-carousel-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="black"
                    className="bi bi-arrow-left-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm12.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 1 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5h6.793z"
                    />
                  </svg>
                </span>
              }
              nextIcon={
                <span className="custom-carousel-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="black"
                    className="bi bi-arrow-right-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm3.5-.5a.5.5 0 0 1 0 1h6.793l-2.147 2.146a.5.5 0 0 1-.708.708l3-3a.5.5 0 0 1 0-.708l-3-3a.5.5 0 1 1 .708.708L10.293 7.5H3.5z"
                    />
                  </svg>
                </span>
              }
            >
              {selectedDish.images.map((img, idx) => (
                <Carousel.Item key={idx}>
                  <Image
                    src={img}
                    alt={`slide-${idx}`}
                    className="w-100 rounded"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <p>No images available.</p>
          )}
          <p className="mt-3">
            {selectedDish ? t(selectedDish.description) : ""}
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};
