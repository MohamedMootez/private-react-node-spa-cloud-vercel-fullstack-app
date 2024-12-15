import { useState } from "react";
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
  const [selectedFile, setSelectedFile] = useState(null); // State for file
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]); // Only take the first selected file
    } else {
      setSelectedFile(null); // Reset the file state if no file is selected
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
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({}); // Clear errors if validation passes

    try {
      // Prepare form data
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("date", formData.date);
      formDataToSend.append("text", formData.text);

      if (selectedFile) {
        formDataToSend.append("file", selectedFile);
      }

      // Log form data for debugging
      console.log("Submitting form data:", {
        name: formData.name,
        email: formData.email,
        date: formData.date,
        text: formData.text,
        file: selectedFile ? selectedFile.name : "No file selected",
      });

      // Send the POST request to your API
      const response = await axios.post("/api/pushToGoogleSheets", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Handle the response
      if (response.status === 200) {
        toast.success(response.data.message); // Success toast
        console.log("Response from server:", response.data);
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name); // Matches "name" expected by backend
        formDataToSend.append("email", formData.email); // Matches "email" expected by backend
        formDataToSend.append("message", formData.text); // Map "text" to "message" as expected
        if (selectedFile) {
          formDataToSend.append("file", selectedFile);
        }
        // Optionally, clear the form after successful submission
        setFormData({
          name: "",
          email: "",
          date: "",
          text: "",
        });
        setSelectedFile(null); // Reset the file input
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      // Handle errors
      console.error("Error submitting form:", error);

      // Provide user-friendly feedback
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error("Server error:", error.response.data);
        toast.error(error.response.data.error || t("Failed to submit the form. Please try again."));
      } else if (error.request) {
        // Request was made but no response received
        console.error("No response received:", error.request);
        toast.error(t("No response from server. Please try again later."));
      } else {
        // Something went wrong setting up the request
        console.error("Error setting up request:", error.message);
        toast.error(t("An unexpected error occurred. Please try again."));
      }
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
                    <div className={clsx(styles.contactUsImageWrapper, "d-grid")}>
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
                              controlid="name"
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
                              controlid="email"
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
                              controlid="date"
                              id="date"
                              label={t("Date")}
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
                              controlid="text"
                              id="text"
                              label={t("Message")}
                              as="textarea"
                              rows="4"
                              value={formData.text}
                              onChange={handleChange}
                              isInvalid={!!errors.text}
                              feedback={errors.text}
                            />
                          </Col>
                          <Col xs={12}>
                            <Form.Group controlId="file">
                              <Form.Label>{t("Upload File")}</Form.Label>
                              <Form.Control
                                type="file"
                                onChange={handleFileChange}
                                isInvalid={!!errors.file}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.file}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <div className="mt-4">
                            <CHButton
                              CHBtnClassname="text-uppercase m-auto text-jet"
                              type="submit"
                            >
                              {t("Submit")}
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
