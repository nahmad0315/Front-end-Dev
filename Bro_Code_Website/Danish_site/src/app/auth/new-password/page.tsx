"use client";
import React, { useState } from "react";
import "./newPassword.css";

const NewPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSave = () => {
    setError(null);
    setSuccess(false);

    if (!password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 9) {
      setError("Password must be at least 9 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // If all validations pass
    setSuccess(true);
    console.log("Password saved:", password);
  };

  return (
    <div className="new-password-container">
      <div className="new-password-box">
        <h2 className="new-password-heading">New Password</h2>
        <p className="new-password-message">
          Your identity has been verified. Set your new password.
        </p>
        
        {/* Error or Success Message */}
        {error && <div className="alert alert-error">{error}</div>}
        {success && (
          <div className="alert alert-success">
            Your password has been successfully updated.
          </div>
        )}

        <div className="form-group">
          <input
            type="password"
            id="password"
            className="form-input"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="confirm-password"
            className="form-input"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button className="save-button" onClick={handleSave}>
          Save Password
        </button>
      </div>
    </div>
  );
};

export default NewPasswordPage;
