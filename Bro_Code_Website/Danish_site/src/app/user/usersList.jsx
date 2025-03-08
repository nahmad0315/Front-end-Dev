"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/users"); // Adjust API route if needed
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.email} className="p-2 border-b">
            {user.firstName} {user.lastName} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;

// "use client";
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const UsersList = () => {
//   const [users, setUsers] = useState([]); // Store users
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get("/api/users");
//         console.log("Fetched users:", response.data); // ✅ Debugging

//         // Ensure we set an array (if response is not an array, set empty array)
//         setUsers(Array.isArray(response.data.users) ? response.data.users : []);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//         setError("Failed to load users.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div className="p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">User List</h2>

//       {loading && <p className="text-gray-500">Loading users...</p>}
//       {error && <p className="text-red-500">{error}</p>}

//       <ul>
//         {users.length > 0
//           ? users.map((user, index) => (
//               <li key={index} className="p-2 border-b">
//                 {user.firstName} {user.lastName} - {user.email}
//               </li>
//             ))
//           : !loading && <p className="text-gray-500">No users found.</p>}
//       </ul>
//     </div>
//   );
// };

// export default UsersList;
