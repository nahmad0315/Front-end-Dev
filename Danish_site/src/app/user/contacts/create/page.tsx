"use client";

import { useState } from "react";
import { Button } from "@/components/button";

const CreateContactPage = () => {
    const [activeFormTab, setActiveFormTab] = useState("ID");

    const horizontalTabs = [
        "ID",
        "Family Info",
        "Corporate Info",
        "Bank Info",
        "Legal Info",
        "Property",
        "Document",
        "Task",
        "Notes",
    ];

    return (
        <div className="p-6 bg-white shadow-lg rounded-2xl border border-gray-300">
            <form className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <input type="text" placeholder="Name" className="border border-gray-400 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400" />
                    <input type="text" placeholder="Corporate Name" className="border border-gray-400 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400" />
                    <input type="email" placeholder="Email" className="border border-gray-400 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400" />
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Country Code Dropdown */}
                    <select className="border border-gray-400 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400">
                        <option value="">Select Country Code</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+30">+30 (Greece)</option>
                        <option value="+91">+90 (Turkiye)</option>
                        <option value="+86">+86 (China)</option>
                    </select>
                    <input type="text" placeholder="Phone Number" className="border border-gray-400 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400" />
                    
                    {/* Channel Reached Dropdown */}
                    <select className="border border-gray-400 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400">
                        <option value="">Select Channel</option>
                        <option value="youtube">Youtube</option>
                        <option value="phone">Phone</option>
                        <option value="social">Social Media</option>
                        <option value="website">Website</option>
                    </select>
                </div>

                {/* Communication Preferences and Role */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <input type="text" placeholder="COMM. Preference" className="border border-gray-400 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400" />
                    
                    <select className="border border-gray-400 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400">
                        <option value="">COMM. Preference</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="whatsapp">Whatsapp</option>
                       
                    </select>

                    {/* Role Dropdown */}
                    <select className="border border-gray-400 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400">
                        <option value="">Select Role</option>
                        <option value="customer">Customer</option>
                        <option value="partner">Partner</option>
                        <option value="vendor">Vendor</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                {/* Responsible Agent Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Responsible Agent" className="border border-gray-400 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400" />
                    <input type="text" placeholder="Secondary Agent" className="border border-gray-400 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400" />
                </div>

                {/* Address Field */}
                <input type="text" placeholder="Address" className="border border-gray-400 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400" />

                {/* Horizontal Tabs */}
                <div className="flex space-x-4 border-b pb-2 overflow-x-auto">
                    {horizontalTabs.map((tab) => (
                        <button
                            key={tab}
                            type="button"
                            onClick={() => setActiveFormTab(tab)}
                            className={`p-3 font-semibold text-gray-700 hover:text-blue-500 focus:outline-none transition ${
                                activeFormTab === tab ? "border-b-4 border-blue-500 text-blue-500" : ""
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* ID Form Section */}
                <div className="space-y-6 mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="Home Country Bank" className="border border-gray-400 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400" />
                        <input type="text" placeholder="Greece Bank" className="border border-gray-400 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="Home Country Bank IBAN" className="border border-gray-400 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400" />
                        <input type="text" placeholder="Greece Bank IBAN" className="border border-gray-400 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="Home Country Bank BIC" className="border border-gray-400 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400" />
                        <input type="text" placeholder="Greece Bank BIC" className="border border-gray-400 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400" />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end space-x-4 mt-6">
                        <Button className="bg-gray-500 text-white px-6 py-2 rounded">Back</Button>
                        <Button className="bg-green-500 text-white px-6 py-2 rounded">Save</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateContactPage;
