// services/api.ts
import { UserModel } from "../types"; // Import the User interface

const API_BASE_URL = "https://stoplight.io/mocks/prop-360/prop360/14074105"; // Base URL
const API_KEY = "qq q"; // Replace with your actual API key

export const fetchUsers = async (): Promise<UserModel[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/v1/users`, {
      method: "GET", // Specify the HTTP method
      headers: {
        Accept: "application/json", // Set the Accept header
        apiKey: API_KEY, // Include the API key in the headers
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        // Handle unauthorized error
        console.error("Unauthorized: Redirecting to login...");
        window.location.href = "/auth/login"; // Redirect to login page
        return []; // Return empty array to avoid further errors
      } else {
        throw new Error(`Failed to fetch users: ${response.statusText}`);
      }
    }

    const users = await response.json();
    console.log(users);
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};