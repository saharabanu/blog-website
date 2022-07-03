import React from "react";
import "./DashboardHome.css";
import { NavLink, useNavigate, Outlet } from "react-router-dom";

const DashboardHome = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <>
      <div className="dashboard">
        <nav className="dashboardNav">
          <NavLink to="/" className="text-white fs-3 " style={{ textDecoration: "none" }}>
            Fashion Blog
          </NavLink>
        </nav>
        <div className="dashboardBody">
          <aside>
            <div className="ps-4 mt-4">
              <NavLink to="/dashboard" className="text-white " style={{ textDecoration: "none" }}>
                Dashboard
              </NavLink>
              <div className="py-2"></div>
              <NavLink
                to={`/dashboard/addBlog`}
                className="text-white "
                style={{ textDecoration: "none" }}
              >
                Add New Blog
              </NavLink>
              <div className="py-2"></div>
              <NavLink
                to={`/dashboard/manageBlog`}
                className="text-white "
                style={{ textDecoration: "none" }}
              >
                Manage Blog
              </NavLink>
              <div className="py-2"></div>
              <NavLink
                to={`/dashboard/makeAdmin`}
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Add New Admin
              </NavLink>
              <div></div>
              <button
                onClick={handleLogout}
                className="px-3 py-2 mt-4 rounded w-75"
                style={{ border: 0 }}
              >
                Logout
              </button>
            </div>
          </aside>
          <main className="bodyContent pt-5 text-dark ">
            <h1>Welcome to Fashion Blog Admin</h1>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
