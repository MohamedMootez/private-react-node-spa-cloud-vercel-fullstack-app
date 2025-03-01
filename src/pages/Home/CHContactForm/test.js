import  { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const MyForm = () => {
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token); // Save CAPTCHA token on successful verification
    console.log("Captcha token received:", token);
  };

  return (
    <form>
      <ReCAPTCHA
        sitekey="6LcZppwqAAAAAL-x0J1AJuRzu6yrfeT_bblrILou" // Your site key
        onChange={handleCaptchaChange} // Pass the function here
      />
      <button type="submit" disabled={!captchaToken}>
        Submit
      </button>
    </form>
  );
};

export default MyForm;
