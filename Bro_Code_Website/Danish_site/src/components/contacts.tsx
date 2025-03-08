"use client";

import { useState, useEffect } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa"; // Icons for actions
import useFetchUsers from "@/hooks/useFetchUsers";

const Contacts = () => {
  const { users, loading, error } = useFetchUsers();

  if (loading) return <p>Loading contacts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6 bg-blue-100 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Contact List</h2>
      <table className="w-full border-collapse border border-gray-300 bg-white">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">First Name</th>
            <th className="border p-2">Last Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone Number</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((contact: any) => (
            <tr key={contact.id} className="border text-center">
              <td className="border p-2">{contact.firstName}</td>
              <td className="border p-2">{contact.lastName}</td>
              <td className="border p-2">{contact.email}</td>
              <td className="border p-2">{contact.phone}</td>
              <td className="border p-2 flex justify-center gap-4">
                <button className="text-blue-600">
                  <FaEye />
                </button>
                <button className="text-yellow-600">
                  <FaEdit />
                </button>
                <button className="text-red-600">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
