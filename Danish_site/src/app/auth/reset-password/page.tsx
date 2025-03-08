"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import the useRouter hook
import "./resetPassword.css";

const ResetPasswordPage = () => {
  const [email] = useState("no*******gmail.com");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const router = useRouter(); // Initialize the router

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Clear error message when typing
    setErrorMessage("");

    // Focus next input field
    if (element.nextSibling) {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  const handleSubmit = () => {
    if (otp.some((digit) => digit === "")) {
      setErrorMessage("Please fill all OTP fields.");
      return;
    }

    // Simulate OTP verification (replace with actual API call)
    const enteredOtp = otp.join("");
    console.log("OTP entered:", enteredOtp);

    if (enteredOtp === "123456") {
      // Redirect to the new password page if OTP is correct
      router.push("/auth/new-password");
    } else {
      setErrorMessage("Invalid OTP. Please try again.");
    }
  };

  const handleResend = () => {
    alert("A new OTP has been sent to your email.");
    // Add API call for resending OTP here
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-box">
        <h2 className="reset-password-heading">Verify Your Email</h2>
        <p className="reset-password-message">
          Your OTP has been sent to your email {email}
        </p>
        <div className="otp-container">
          {otp.map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className="otp-input"
              value={otp[index]}
              onChange={(e) => handleChange(e.target, index)}
              aria-label={`Digit ${index + 1}`}
            />
          ))}
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button className="continue-button" onClick={handleSubmit}>
          Continue
        </button>
        <button className="resend-button" onClick={handleResend}>
          Resend
        </button>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
