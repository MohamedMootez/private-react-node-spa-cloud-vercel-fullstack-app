import ReCAPTCHA from "react-google-recaptcha";

const CaptchaButton = ({ setCaptchaToken }) => {
  const handleCaptchaChange = (token) => {
    console.log("CAPTCHA Token:", token);
    setCaptchaToken(token);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <ReCAPTCHA
        sitekey="6LfNtJwqAAAAAALeAfLR7p_G-vFZsaCcLedN-nym" // Replace with your actual site key
        onChange={handleCaptchaChange}
      />
    </div>
  );
};

export default CaptchaButton;
