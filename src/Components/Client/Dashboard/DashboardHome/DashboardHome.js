import React from "react";
import "./DashboardHome.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import AddBlog from "../AddBlog/AddBlog";
import ManageBlogs from "../ManageBlogs/ManageBlogs";
import MakeAdmin from "../MakeAdmin/MakeAdmin";

const DashboardHome = () => {
  const { dash } = useParams();
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
              {/* <NavLink
                to={`/dashboard/makeAdmin`}
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Add New Admin
              </NavLink> */}
              <div></div>
              <NavLink to="/"
                onClick={handleLogout}
                className="text-white "
                style={{ border: 0 }}
              >
                Go  Home
                </NavLink>
            </div>
          </aside>
          <main className="bodyContent pt-5 text-dark ">
            {dash === undefined ? (
              <h1>Welcome to Fashion Blog Admin</h1>
            ) : dash === "addBlog" ? (
              <AddBlog />
            ) : dash === "manageBlog" ? (
              <ManageBlogs />
            ) : dash === "makeAdmin" ? (
              <MakeAdmin />
            ) : (
              ""
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
