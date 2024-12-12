import  { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { CHFormControl, CHButton } from "../../../components";
import clsx from "clsx";
import styles from "./CHContactForm.module.css";
import { contactUsImg1, contactUsImg2, contactUsImg3 } from "../../../constant/imageData";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CHContactForm = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    text: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validateInputs = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t("Name is required.");
    if (!formData.email.trim()) {
      newErrors.email = t("Email is required.");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("Invalid email format.");
    }
    if (!formData.date.trim()) newErrors.date = t("Date is required.");
    if (!formData.text.trim()) newErrors.text = t("Text is required.");
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    try {
      const response = await axios.post("/api/pushToGoogleSheets", formData);
      toast.info(response.data.message); 
      // Success toast
      // setFormData({ name: "", email: "", date: "", text: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(t("Failed to submit the form.")); // Error toast
    }
  };

  return (
    <>
     <ToastContainer 
  position="top-right" 
  theme="dark" 
  autoClose={5000} 
  hideProgressBar 
  toastStyle={{ color: "gold" }} 
/>

      <section
        className={clsx(styles.contactUsSection, "section-py")}
        id="contactUsSection"
      >
        <Container>
          <Row>
            <Col xs={12}>
              <span className="primary-title d-block mb-4 text-start">
                {t("InscriLabel")}
              </span>
              <h2 className="secondary-title text-start" style={{ fontSize: "1.7em" }}>
                {t("RegistrationLabel")}
              </h2>
            </Col>
            <Col xs={12}>
              <div className={styles.contactUsFormWrapper}>
                <Row className="align-items-center">
                  <Col xs={12} xl={6}>
                    <div
                      className={clsx(styles.contactUsImageWrapper, "d-grid")}
                    >
                      <div className={clsx(styles.gridImg, "ratio")}>
                        <img
                          src={contactUsImg1}
                          alt="contact-us-img-1"
                          width={"100%"}
                          height={"100%"}
                          className="object-fit-cover"
                        />
                      </div>
                      <div className={clsx(styles.gridImg, "ratio")}>
                        <img
                          src={contactUsImg2}
                          alt="contact-us-img-2"
                          width={"100%"}
                          height={"100%"}
                          className="object-fit-cover"
                        />
                      </div>
                      <div className={clsx(styles.gridImg3, "ratio")}>
                        <img
                          src={contactUsImg3}
                          alt="contact-us-img-3"
                          width={"100%"}
                          height={"100%"}
                          className="object-fit-cover"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} xl={6} className="mt-5 mt-xl-0">
                    <div className={clsx(styles.formWrapper, "ch-bg-white")}>
                      <Form onSubmit={handleSubmit}>
                        <Row>
                          <Col xs={12} sm={6}>
                            <CHFormControl
                              controlid="namecontrolid"
                              id="name"
                              label={t("Name")}
                              type="text"
                              value={formData.name}
                              onChange={handleChange}
                              isInvalid={!!errors.name}
                              feedback={errors.name}
                              required
                            />
                          </Col>
                          <Col xs={12} sm={6}>
                            <CHFormControl
                              controlid="emailcontrolid"
                              id="email"
                              label={t("Email")}
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              isInvalid={!!errors.email}
                              feedback={errors.email}
                              required
                            />
                          </Col>
                          <Col xs={12} sm={6}>
                            <CHFormControl
                              controlid="datecontrolid"
                              id="date"
                              label="Date"
                              type="date"
                              value={formData.date}
                              onChange={handleChange}
                              isInvalid={!!errors.date}
                              feedback={errors.date}
                              required
                            />
                          </Col>
                          <Col xs={12}>
                            <CHFormControl
                              controlid="textareacontrolid"
                              id="text"
                              label={t("TellLabel")}
                              as="textarea"
                              rows="8"
                              value={formData.text}
                              onChange={handleChange}
                              isInvalid={!!errors.text}
                              feedback={errors.text}
                            />
                          </Col>
                          <div className="mt-5 pt-4">
                            <CHButton
                              CHBtnClassname="text-uppercase m-auto text-jet"
                              type="submit"
                            >
                              {t("SInscriLabel")}
                            </CHButton>
                          </div>
                        </Row>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
