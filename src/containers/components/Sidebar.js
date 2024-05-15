import React, { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as BrandLogo } from "../../assets/brand-logo.svg";
import Logout from "./Sidebar/Logout";

const Sidebar = ({ isSidebarCollapsed, toggleSidebar }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="sb-border">
      <ul
        className={`navbar-nav bg-dark-100 sidebar sidebar-dark accordion h-100 ${
          isSidebarCollapsed ? "toggled" : ""
        }`}
        id="accordionSidebar"
      >
        {/* Logo */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            {/*<BrandLogo className="img-fluid"/> */}
            {/* <i className="bi bi-command color-red"></i> */}
            <img 
              src={require("../../assets/logo1.png")} 
              alt="Logo"
              style={{width: "70px"}} >
            </img>
          </div>
          <div className="sidebar-brand-text mx-2">
            <Logo />
          </div>
        </a>

        <hr className="sidebar-divider my-0 rounded" />
        <li className="nav-item">
          <Link
            to="/admin/dashboard"
            className={`nav-link ${isActive("/admin/dashboard") ? "active" : ""}`}
          >
            <i className={`bi bi-speedometer ${isActive("/admin/dashboard") ? "text-white" : ""}`}></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <hr className="sidebar-divider rounded" />

        <div className="sidebar-heading">Process</div>
        <li className="nav-item">
        <Link
          to="/admin/orders"
          className={`nav-link ${isActive("/admin/orders") || isActive("/admin/orders/add-order") ? "active" : ""}`}
        >
          <i className={`bi bi-gear-fill ${isActive("/admin/orders") || isActive("/admin/orders/add-order") ? "text-white" : ""}`}></i>
          <span>Orders</span>
        </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/admin/payments"
            className={`nav-link ${isActive("/admin/payments") || isActive("/admin/payments/add-payment")? "active" : ""}`}
          >
            <i className={`bi bi-wallet-fill ${isActive("/admin/payments") || isActive("/admin/payments/add-payment") ? "text-white" : ""}`}></i>
            <span>Payments</span>
          </Link>
        </li>

        <hr className="sidebar-divider rounded" />

        <div className="sidebar-heading">System</div>

        <li className="nav-item">
          <Link
            to="/admin/users"
            className={`nav-link ${isActive("/admin/users") || isActive("/admin/users/add-user") ? "active" : ""}`}
          >
            <i className={`bi bi-person-fill ${isActive("/admin/users") || isActive("admin/users/add-user") ? "text-white" : ""}`}></i>
            <span>Users</span>
          </Link>
        </li>

        <hr className="sidebar-divider d-none d-md-block rounded" />

        <li className="nav-item">
          <Logout Navigate to="/login"/>
        </li>

        <div className="text-center d-none d-md-inline my-5">
          <button
            className="rounded-circle border-0 btn-dark position-relative"
            style={{ width: "40px", height: "40px" }}
            onClick={toggleSidebar}
          >
            {isSidebarCollapsed ? (
              <i className="bi bi-chevron-double-right position-absolute top-50 start-50 translate-middle color-60"></i>
            ) : (
              <i className="bi bi-chevron-double-left position-absolute top-50 start-50 translate-middle color-60"></i>
            )}
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
