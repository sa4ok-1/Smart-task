import React from "react";
import { UserFilters } from "./usersFilter/userFilter";
import { UserTable } from "./usersTable/UserTable";

const App: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: " #FF6347", fontSize: "36px" }}>
        Table of Users
      </h1>
      <UserFilters />
      <UserTable />
    </div>
  );
};

export default App;
