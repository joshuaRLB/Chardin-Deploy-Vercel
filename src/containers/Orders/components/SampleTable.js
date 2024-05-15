import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../api/firebaseScript";
import { Link } from "react-router-dom";
import SearchBar from "../../../components/Shared/SearchBar";
import OrderModal from "./OrderModal";

const SampleTable = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [allOrders, setAllOrders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("Latest to Oldest");

  const handleRowClick = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const fetchOrders = async () => {
      const ordersCollection = collection(firestore, "orders");
      const ordersSnapshot = await getDocs(ordersCollection);
      const ordersData = ordersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAllOrders(ordersData);
    };

    fetchOrders();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to the first page on a new search
  };

  const handleSort = (order) => {
    setSortOrder(order);
    setCurrentPage(1); // Reset to the first page on a new sort
  };

  const filterOrders = (orders, query) => {
    if (!query) {
      return orders;
    }
    return orders.filter((order) =>
      order.fullName.toLowerCase().includes(query.toLowerCase())
    );
  };

  const sortOrders = (orders, order) => {
    const sortedOrders = [...orders];
    switch (order) {
      case "Latest to Oldest":
        return sortedOrders.sort((a, b) => new Date(b.filledupDate) - new Date(a.filledupDate));
      case "Oldest to Latest":
        return sortedOrders.sort((a, b) => new Date(a.filledupDate) - new Date(b.filledupDate));
      case "A to Z":
        return sortedOrders.sort((a, b) => a.fullName.localeCompare(b.fullName));
      case "Z to A":
        return sortedOrders.sort((a, b) => b.fullName.localeCompare(a.fullName));
      default:
        return sortedOrders;
    }
  };

  const paginateOrders = (items, page, perPage) => {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    return items.slice(startIndex, endIndex);
  };

  const filteredOrders = filterOrders(allOrders, searchQuery);
  const sortedOrders = sortOrders(filteredOrders, sortOrder);
  const orders = paginateOrders(sortedOrders, currentPage, itemsPerPage);

  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const prevPage = () => setCurrentPage((prevPage) => prevPage - 1);

  return (
    <>
      {/* Table Header */}
      <div className="table-header">
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
                <a className="dropdown-item" href="#" onClick={() => handleSort("Latest to Oldest")}>
                  Latest to Oldest
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={() => handleSort("Oldest to Latest")}>
                  Oldest to Latest
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={() => handleSort("A to Z")}>
                  A to Z
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={() => handleSort("Z to A")}>
                  Z to A
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mr-3">
          <SearchBar onSearch={handleSearch} /> {/* Pass handleSearch to SearchBar */}
        </div>
      </div>
      {/* Table Content */}
      <table className="my-table mt-2">
        <thead className="table-head">
          <tr>
            <th className="col-lg-1">ID</th>
            <th className="col-lg-1">Client</th>
            <th className="col-lg-4">Items</th>
            <th className="col-lg-1">Filled up Date</th>
            <th className="col-lg-1">Due Date</th>
            <th className="col-lg-1">Balance</th>
            <th className="col-lg-2">Status</th>
            <th className="col-lg-1"></th>
          </tr>
        </thead>
        <tbody className="table-body">
          {orders.map((order) => (
            <tr
              key={order.id}
              onClick={() => handleRowClick(order)}
              style={{ cursor: "pointer" }}
            >
              <td>{order.jobOrderID}</td>
              <td>{order.fullName}</td>
              <td>
                {[
                  order.item1name,
                  order.item2name,
                  order.item3name,
                  order.item4name,
                  order.item5name,
                ]
                  .filter((item) => item)
                  .join(". ")}
              </td>
              <td>{order.filledupDate}</td>
              <td>{order.dueDate}</td>
              <td>₱ {order.totalprice - order.deposit}</td>
              <td>{order.status}</td>
              <td>
                <Link
                  to={`/admin/orders/edit-order/${order.id}`}
                  className="text-decoration-none"
                >
                  <button className="small-btn rounded-pill">Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Modal */}
      {isModalOpen && selectedOrder && (
        <OrderModal
          isOpen={isModalOpen}
          orderData={selectedOrder}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      {/* Pagination */}
      <div className="text-end">
        <div className="pagination justify-content-end">
          {currentPage > 1 && (
            <a href="#" onClick={prevPage}>
              &laquo; Previous
            </a>
          )}
          {[...Array(Math.ceil(sortedOrders.length / itemsPerPage))].map(
            (_, index) => (
              <a
                key={index}
                href="#"
                className={currentPage === index + 1 ? "active" : ""}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </a>
            )
          )}
          {currentPage < Math.ceil(sortedOrders.length / itemsPerPage) && (
            <a href="#" onClick={nextPage}>
              Next &raquo;
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default SampleTable;
