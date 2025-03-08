import React from "react";
import Contacts from "@/components/contacts";
import NewUser from "./createNew/newUser.jsx";
import UsersList from "./usersList.jsx";

const Dashboard = () => {
  return (
    <div>
      <NewUser />
      {/* <UsersList /> */}
      <Contacts />
    </div>
  );
};

export default Dashboard;
