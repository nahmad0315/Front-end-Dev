import axiosClient from "@/services/axiosClient";
import { useState, useEffect } from "react";

const apiUrl: string = "/b/67bddc21acd3cb34a8f03071";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export default function useFetchUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      console.log("Fetching users from API:", apiUrl);
      const response = await axiosClient.get(apiUrl);
      if (response.status != 200) throw new Error("Failed to fetch contacts");
      const data = await response.data;
      console.log("API Response:", data); // Debugging log

      // 🔹 Extract 'record' from API response
      if (data && data.record) {
        setUsers(data.record);
      } else {
        throw new Error("Invalid API response structure");
      }
    } catch (err: any) {
      console.error("Error fetching users:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [apiUrl]);

  return { users, loading, error };
}
