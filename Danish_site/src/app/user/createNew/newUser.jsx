"use client";
import React, { useState } from "react";
import { addUser, uploadPhoto } from "@/services/api.js";

const NewUser = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    role: "",
    country: "",
  });
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      let photoUrl = "";
      if (photo) {
        const photoResponse = await uploadPhoto(photo);
        if (photoResponse?.path) {
          photoUrl = photoResponse.path;
        } else {
          throw new Error("Photo upload failed");
        }
      }

      const userResponse = await addUser({ ...formData, photoUrl });
      console.log("User added:", userResponse);
      alert("User added successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        role: "",
        country: "",
      });
      setPhoto(null);
      setPhotoPreview(null);
      setShowForm(false);
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-8 py-4 rounded-full shadow-md text-lg hover:bg-blue-700"
        >
          {showForm ? "Close" : "Add New"}
        </button>
      </div>

      {showForm && (
        <div className="p-6 shadow-lg rounded-xl w-full max-w-3xl bg-white border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">
            Add New User
          </h2>
          {error && <p className="text-red-600 mb-2">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              {Object.keys(formData).map((key) => (
                <input
                  key={key}
                  id={key}
                  type={key === "email" ? "email" : "text"}
                  name={key}
                  placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                  value={formData[key]}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ))}
            </div>

            <h3 className="text-md font-semibold">Upload Photo</h3>
            <input
              id="photo"
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="w-full p-3"
            />

            {photoPreview && (
              <div className="mb-4 flex justify-center">
                <img
                  src={photoPreview}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded-full border"
                />
              </div>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="bg-green-500 text-white px-8 py-4 rounded-full shadow-md text-lg hover:bg-green-600"
              >
                {loading ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default NewUser;
