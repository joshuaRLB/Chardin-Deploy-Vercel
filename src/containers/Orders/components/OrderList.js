import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../api/firebaseScript";
import { Link } from "react-router-dom";
import SearchBar from "../../../components/Shared/SearchBar";

const OrderList = ({ setOrderId }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [allOrders, setAllOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const handleRowClick = (order) => {
    setSelectedOrder(order.id);
    setOrderId(order.id);
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
  };

  const handleSort = (order) => {
    setSortOrder(order);
  };

  const sortOrders = (orders) => {
    switch (sortOrder) {
      case "AtoZ":
        return orders.sort((a, b) => a.fullName.localeCompare(b.fullName));
      case "ZtoA":
        return orders.sort((a, b) => b.fullName.localeCompare(a.fullName));
      default:
        return orders;
    }
  };


const filterOrders = (orders) => {
  if (!searchQuery) {
    return orders;
  }
  return orders.filter((order) =>
    (order.fullName?.toLowerCase()?.includes(searchQuery.toLowerCase())) ||
    (order.item1name?.toLowerCase()?.includes(searchQuery.toLowerCase())) ||
    (order.item2name?.toLowerCase()?.includes(searchQuery.toLowerCase())) ||
    (order.item3name?.toLowerCase()?.includes(searchQuery.toLowerCase())) ||
    (order.item4name?.toLowerCase()?.includes(searchQuery.toLowerCase())) ||
    (order.item5name?.toLowerCase()?.includes(searchQuery.toLowerCase())) ||
    (order.jobOrderID?.toLowerCase()?.includes(searchQuery.toLowerCase())) ||
    
    (order.filledupDate?.toLowerCase()?.includes(searchQuery.toLowerCase())) ||
    (order.dueDate?.toLowerCase()?.includes(searchQuery.toLowerCase())) ||
    (order.status?.toLowerCase()?.includes(searchQuery.toLowerCase()))
  );
};




  const sortedAndFilteredOrders = sortOrders(filterOrders([...allOrders]));

  const paginateOrders = (items, page, perPage) => {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    return items.slice(startIndex, endIndex);
  };

  const orders = paginateOrders(sortedAndFilteredOrders, currentPage, itemsPerPage);

  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const prevPage = () => setCurrentPage((prevPage) => prevPage - 1);

  return (
    <>
      {/* Table Header */}
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
      {/* Table Content */}
      <table className="my-table mt-2">
        <thead className="table-head">
          <tr>
            <th className="col-lg-1">ID</th>
            <th className="col-lg-2">Client</th>
            <th className="col-lg-3">Items</th>
            <th className="col-lg-1">Balance</th>
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
                  .join(", ")}
              </td>
              <td>₱ {Math.max(parseInt(order.balance), 0)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="text-end">
        <div className="pagination justify-content-end">
          {currentPage > 1 && (
            <a href="#" onClick={prevPage}>
              &laquo; Previous
            </a>
          )}
          {[...Array(Math.ceil(sortedAndFilteredOrders.length / itemsPerPage))].map(
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
          {currentPage < Math.ceil(sortedAndFilteredOrders.length / itemsPerPage) && (
            <a href="#" onClick={nextPage}>
              Next &raquo;
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default OrderList;
