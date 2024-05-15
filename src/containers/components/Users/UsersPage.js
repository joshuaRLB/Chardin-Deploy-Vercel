import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import TableUser from "../../Orders/components/TableUser";

import { FaPlus } from "react-icons/fa6";

const UsersPage = () => {
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
              <div>
                {/* Header */}
                <div className="d-flex flex-row justify-content-between mb-4 align-items-center">
                <span className="text-large-reg d-none d-md-block">List of Admin Users</span>
                <span className="text-header-sb d-md-none">Admin Users</span>

                <div className="d-none d-md-block">
                  <Link
                  to="/admin/users/add-user"
                    className="text-decoration-none"
                  >
                    <button className="button btn-green">
                      <FaPlus className="mr-2" /> Add New Admin
                    </button>
                  </Link>
                </div>
                <div className="d-md-none">
                  <Link
                    to="/admin/users/add-user"
                    className="text-decoration-none"
                  >
                    <div className="button btn-green">
                      <FaPlus className="mr-2" /> New Admin
                    </div>
                  </Link>
                </div>
              </div>
                <TableUser />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
