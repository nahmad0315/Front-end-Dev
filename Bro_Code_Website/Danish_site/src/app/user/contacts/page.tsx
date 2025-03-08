"use client";

import { useState, useEffect } from "react";
import TableActions from "@/components/common/table/TableActions";
import Table from "@/components/common/table/Table";
import { ColumnDef } from "@tanstack/react-table";
import { fetchUsers } from "@/services/api";
import { UserModel } from "@/types";
import { useRouter } from "next/navigation";

const columns: ColumnDef<UserModel>[] = [
  { accessorKey: "firstName", header: "First Name" },
  { accessorKey: "lastName", header: "Last Name" },
  { accessorKey: "userName", header: "Email" },
  { accessorKey: "phoneNumber", header: "Phone Number" },

  {
    header: "Action",
    cell: ({ row }) => (
      <TableActions
        onView={() => alert(`Viewing ${row.original.firstName}`)}
        onEdit={() => alert(`Editing ${row.original.firstName}`)}
        onDelete={() => alert(`Deleting ${row.original.firstName}`)}
      />
    ),
  },
];

const UserList = () => {
  const [data, setData] = useState<UserModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const users = await fetchUsers(); // Fetch users using the API service
        setData(users);
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={`p-6`}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-[27px] font-bold">Contact List</h1>
        <button
          className="bg-primary border border-primary text-white px-9 py-3 rounded-full h-[55px] font-button text-button font-normal text-left hover:bg-primary hover:text-white transition text-center"
          onClick={() => router.push("/user/contacts/create")} // Navigate to the contact creation page
        >
          + Add New
        </button>
      </div>

      <Table columns={columns} data={data} />
    </div>
  );
};

export default UserList;
