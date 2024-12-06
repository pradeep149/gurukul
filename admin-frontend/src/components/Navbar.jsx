import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded ${
                isActive ? "bg-blue-800" : "hover:bg-blue-700"
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `px-3 py-2 rounded ${
                isActive ? "bg-blue-800" : "hover:bg-blue-700"
              }`
            }
          >
            Add Blog
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
