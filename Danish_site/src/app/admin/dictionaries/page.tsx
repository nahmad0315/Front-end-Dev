"use client";

import Table from "@/components/common/table/Table";
import TableActions from "@/components/common/table/TableActions";
import React, { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";

interface Dictionary {
    id: string;
    label: string;
  }

const columns: ColumnDef<Dictionary>[]  = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "label", header: "Label" },
    {
        header: "Action",
        cell: ({ row }) => (
            <TableActions
                onView={() => alert(`Viewing ${row.original.label}`)}
                onEdit={() => alert(`Editing ${row.original.label}`)}
                onDelete={() => alert(`Deleting ${row.original.label}`)}
            />
        ),
    },
];

const sampleData = [
    {
        id: "1",
        label: "Instagram",
    },
    {
        id: "2",
        label: "Facebook",
    },
];

const DictionaryPage = () => {
    const [data] = useState(sampleData);
    const [selectedOption, setSelectedOption] = useState("");

    return (
        <div className="p-6">
            {/* Top Section - Dropdown + Buttons */}
            <div className="flex justify-between items-center mb-4">

                {/* Dropdown on the left side */}
                <select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="border border-primary bg-primary h-[55px] px-4 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select Option</option>
                    <option value="contactType">Contact Type</option>
                    <option value="contactRole">Contact Role</option>
                    <option value="propertyType">Property Type</option>
                </select>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                    <button className="bg-primary border border-primary text-white px-9 py-3 rounded-full h-[55px] font-button text-button font-normal text-left hover:bg-primary hover:text-white transition text-center">
                        + Add New Dictionary
                    </button>
                    <button className="bg-primary border border-primary text-white px-9 py-3 rounded-full h-[55px] font-button text-button font-normal text-left hover:bg-primary hover:text-white transition text-center">
                        + Add New
                    </button>
                </div>
            </div>

            {/* Table */}
            <Table columns={columns} data={data} />
        </div>
    );
}

export default DictionaryPage;
