import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { CHFormControl, CHButton } from "../../../components";
import clsx from "clsx";
import styles from "./CHContactForm.module.css";
import {
  contactUsImg1,
  contactUsImg2,
  contactUsImg3,
} from "../../../constant/imageData";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CaptchaButton from "../../../components/CaptchaButton";

export const CHContactForm = () => {
  const { t } = useTranslation();
  const [setIsButtonDisabled] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    text: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [captchaToken, setCaptchaToken] = useState(null); // State for CAPTCHA
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    } else {
      setSelectedFile(null);
    }
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
    if (!selectedFile) newErrors.file = t("File is required.");
    if (!captchaToken) newErrors.captcha = t("Please complete the CAPTCHA.");
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);
    console.log("bbbb");

    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length > 0) {
      console.log(validationErrors);
      console.log(Object.keys(validationErrors));

      Object.keys(validationErrors).forEach((key) => {
        toast.error(validationErrors[key]);
      });

      setErrors(validationErrors);
      setIsButtonDisabled(false); // Re-enable button on validation error
      return;
    }

    console.log("kkkkk");
    console.log(validationErrors);

    setErrors({});

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("date", formData.date);
      formDataToSend.append("text", formData.text);
      formDataToSend.append("captchaToken", captchaToken); // Include CAPTCHA token

      if (selectedFile) {
        const uniqueCode = Date.now();
        const fileExtension = selectedFile.name.split(".").pop();
        const newFileName = `${formData.name}_${uniqueCode}.${fileExtension}`;
        const renamedFile = new File([selectedFile], newFileName, {
          type: selectedFile.type,
        });
        formDataToSend.append("file", renamedFile);
      }

      const response = await axios.post(
        "/api/pushToGoogleSheets",
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.status === 200 || response.status === 300) {
        toast.info(response.data.message);
        setFormData({
          name: "",
          email: "",
          date: "",
          text: "",
        });
        setSelectedFile(null);
        setCaptchaToken(null); // Reset CAPTCHA token
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(t("An error occurred. Please try again."));
    } finally {
      setIsButtonDisabled(false);
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
              <h2
                className="secondary-title text-start"
                style={{ fontSize: "1.7em" }}
              >
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
                          <Col xs={12}>
                            <Form.Group
                              controlId="fileUpload"
                              className={clsx(
                                styles.formWrapper,
                                "file-upload-container ch-bg-white"
                              )}
                            >
                              <style>
                                {`
      .file-upload-container {
    
  
        background-color: #ffffff; /* Matches the rest of the form */
        border-radius: 0.5rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .file-upload-label {
        font-size: 1em; /* Matches the input labels */

        margin-bottom: 1rem;
        color: #333;
        display: block;
      }


      .file-upload-input {
 
        font-size: 0.6em; /* Matches input text size */
        border: 1px solid #ced4da; /* Bootstrap default border color */
        border-radius: 0.25rem;
        background-color: #f8f9fa; /* Light gray for a subtle contrast */
        transition: border-color 0.3s ease, background-color 0.3s ease;
        cursor: pointer;
      }

      .file-upload-input:hover,
      .file-upload-input:focus {
        border-color: #007bff; /* Matches Bootstrap primary color */
        background-color: #e9ecef;
      }

      .file-upload-feedback {
        font-size: 0.875rem; /* Consistent with the other feedback */
        color: #dc3545; /* Matches error text color */
        margin-top: 0.5rem;
      }
    `}
                              </style>
                              <Form.Label className="file-upload-label">
                                {t("uploadFile")}
                              </Form.Label>
                              <div className="file-upload-wrapper">
                                <Form.Control
                                  type="file"
                                  onChange={handleFileChange}
                                  isInvalid={!!errors.file}
                                  className="file-upload-input"
                                />
                              </div>
                              <Form.Control.Feedback
                                type="invalid"
                                className="file-upload-feedback"
                              >
                                {errors.file}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>

                          <CaptchaButton
                            setCaptchaToken={setCaptchaToken}
                          ></CaptchaButton>

                          <div className="mt-5 pt-4">
                            <CHButton
                              CHBtnClassname="text-uppercase m-auto text-jet"
                              type="submit"
                              disabled={false}
                              // onClick={handleSubmit} // Reattach the onClick event here
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
