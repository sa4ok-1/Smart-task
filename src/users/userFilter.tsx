import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../app/store";
import { setFilter } from "./usersSlice";

export const UserFilters: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector((state: RootState) => state.users.filters);

  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    dispatch(setFilter({ key, value }));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingLeft: "30px",
      }}
    >
      <input
        type="text"
        placeholder="Filter by name"
        value={filters.name}
        onChange={(e) => handleFilterChange("name", e.target.value)}
      />
      <input
        type="text"
        placeholder="Filter by username"
        value={filters.username}
        onChange={(e) => handleFilterChange("username", e.target.value)}
      />
      <input
        type="text"
        placeholder="Filter by email"
        value={filters.email}
        onChange={(e) => handleFilterChange("email", e.target.value)}
      />
      <input
        type="text"
        placeholder="Filter by phone"
        value={filters.phone}
        onChange={(e) => handleFilterChange("phone", e.target.value)}
      />
    </div>
  );
};
