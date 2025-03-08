"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./Signup.css";

export default function SignupForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
   const router = useRouter();

  const togglePasswordVisibility = (field: "password" | "confirmPassword") => {
    if (field === "password") {
      setPasswordVisible(!passwordVisible);
    } else {
      setConfirmPasswordVisible(!confirmPasswordVisible);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Password validation
    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Reset error and proceed with form submission
    setErrorMessage("");
    console.log("Form submitted!");
    // Redirect to /admin after successful signup
    
    router.push("/admin");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">SignUp</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group half-width">
              <input
                type="text"
                id="first-name"
                placeholder="First Name"
                required
              />
            </div>
            <div className="form-group half-width">
              <input
                type="text"
                id="last-name"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              id="phone"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="form-group password-group">
            <div className="password-field">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <span
                className="password-toggle"
                onClick={() => togglePasswordVisibility("password")}
              >
                {passwordVisible ? <VisibilityOff /> : <Visibility />}
              </span>
            </div>
            <p className="validation-text">
              Your password needs to be at least 8 characters.
            </p>
          </div>
          <div className="form-group password-group">
            <div className="password-field">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                required
              />
              <span
                className="password-toggle"
                onClick={() => togglePasswordVisibility("confirmPassword")}
              >
                {confirmPasswordVisible ? <VisibilityOff /> : <Visibility />}
              </span>
            </div>
          </div>
          {errorMessage && <p className="error-text">{errorMessage}</p>}
          <button type="submit" className="signup-button">
            Sign up
          </button>
          <p className="already-account-text">
            Already have an account? <a href="/auth/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}
