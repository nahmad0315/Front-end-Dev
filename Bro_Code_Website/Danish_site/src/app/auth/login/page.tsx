"use client";
import React, { useState } from "react";
import "./Login.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Hardcoded credentials (examples)
    if (email === "user@example.com" && password === "user123") {
      window.location.href = "/user/contacts"
    } else if (email === "admin@example.com" && password === "admin123") {
      window.location.href = "/admin/dictionaries"
    } else {
      alert("Invalid credentials. Try again!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
           
            <div className="password-field">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="password-toggle" onClick={togglePasswordVisibility}>
                {passwordVisible ? <VisibilityOff /> : <Visibility />}
              </span>
            </div>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <a href="/auth/forget-password" className="forgot-password-link">
          Forgot Password?
        </a>
        <p className="signup-text">
          Don&apos;t have an account? <a href="/auth/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};


export default Login;
