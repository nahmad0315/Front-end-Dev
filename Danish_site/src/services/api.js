import axios from "axios";

const API_BASE_URL = "/api";

// Function to add a new user
export const addUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, userData, {
      headers: { "Content-Type": "application/json" }, // ✅ Ensure correct headers
    });
    return response.data;
  } catch (error) {
    console.error("Error adding user:", error.response?.data || error.message);
    throw error;
  }
};

// Function to upload a photo
export const uploadPhoto = async (photo) => {
  try {
    const formData = new FormData();
    formData.append("photo", photo);

    const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error uploading photo:",
      error.response?.data || error.message
    );
    throw error;
  }
};

console.log("Exports from api.js:", { addUser, uploadPhoto });
