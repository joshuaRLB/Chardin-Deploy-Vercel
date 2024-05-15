import { useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import { FaPlus } from "react-icons/fa6";
import TablePayment from "../Orders/components/TablePayment";
import SearchBar from "../../components/Shared/SearchBar";

const Payments = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSort = (order) => {
    setSortOrder(order);
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
                <span className="text-large-reg d-none d-md-block">Payments History</span>
                <span className="text-header-sb d-md-none">Payments</span>

                <div className="d-none d-md-block">
                  <Link
                    to="/admin/payments/add-payment"
                    className="text-decoration-none"
                  >
                    <button className="button btn-green">
                      <FaPlus className="mr-2" /> Add New Payment
                    </button>
                  </Link>
                </div>
                <div className="d-md-none">
                  <Link
                    to="/admin/orders/add-order"
                    className="text-decoration-none"
                  >
                    <div className="button btn-green">
                      <FaPlus className="mr-2" /> New Pay
                    </div>
                  </Link>
                </div>
              </div>
              <div className="table-header mt-4">
                <div className="d-flex no-wrap px-1">
                  <div className="dropdown">
                    <button
                      className="button text-body-reg btn-sort dropdown-toggle"
                      type="button"
                      id="btnSort"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sort by
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="btnSort">
                      <li>
                        <a className="dropdown-item" href="#" onClick={() => handleSort("Latest")}>
                          Latest to Oldest
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" onClick={() => handleSort("Oldest")}>
                          Oldest to Latest
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" onClick={() => handleSort("AtoZ")}>
                          A to Z
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" onClick={() => handleSort("ZtoA")}>
                          Z to A
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mr-3">
                  <SearchBar onSearch={handleSearch} />
                </div>
              </div>
              <TablePayment searchQuery={searchQuery} sortOrder={sortOrder} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
