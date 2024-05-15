import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../Dashboard.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import { FaPlus } from "react-icons/fa6";
import Table from "./components/Table";
import SampleTable from "./components/SampleTable";

const OrdersPage = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar
          isSidebarCollapsed={isSidebarCollapsed}
          toggleSidebar={toggleSidebar}
        />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar toggleSidebar={toggleSidebar} />

            <div className="container-fluid py-4">
              <div className="d-flex flex-row justify-content-between mb-4 align-items-center">
                <span className="text-large-reg d-none d-md-block">Orders History</span>
                <span className="text-header-sb d-md-none">Orders</span>

                <div className="d-none d-md-block">
                  <Link
                    to="/admin/orders/add-order"
                    className="text-decoration-none"
                  >
                    <button className="button btn-green">
                      <FaPlus className="mr-2" /> Add New Order
                    </button>
                  </Link>
                </div>
                <div className="d-md-none">
                  <Link
                    to="/admin/orders/add-order"
                    className="text-decoration-none"
                  >
                    <div className="button btn-green">
                      <FaPlus className="mr-2" /> New Order
                    </div>
                  </Link>
                </div>
              </div>
              <SampleTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
