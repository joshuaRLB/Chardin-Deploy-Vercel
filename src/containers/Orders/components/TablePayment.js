import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../api/firebaseScript";
import { Link } from "react-router-dom";
import SearchBar from "../../../components/Shared/SearchBar";
import OrderModal from "./OrderModal";

const TablePayment = ({ searchQuery, sortOrder }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [allOrders, setAllOrders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
    console.log('Modal should be open now:', isModalOpen);
  };

  useEffect(() => {
    const fetchOrders = async () => {
      const ordersCollection = collection(firestore, "payment");
      const ordersSnapshot = await getDocs(ordersCollection);
      const ordersData = ordersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAllOrders(ordersData);
    };

    fetchOrders();
  }, []);

  const filterOrders = (orders) => {
    return orders.filter(order =>
      order.paidBy.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const sortOrders = (orders) => {
    switch (sortOrder) {
      case "AtoZ":
        return orders.sort((a, b) => a.paidBy.localeCompare(b.paidBy));
      case "ZtoA":
        return orders.sort((a, b) => b.paidBy.localeCompare(a.paidBy));
      case "Latest":
        return orders.sort((a, b) => new Date(b.datePaid) - new Date(a.datePaid));
      case "Oldest":
        return orders.sort((a, b) => new Date(a.datePaid) - new Date(b.datePaid));
      default:
        return orders;
    }
  };

  const paginateOrders = (items, page, perPage) => {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    return items.slice(startIndex, endIndex);
  };

  const filteredAndSortedOrders = sortOrders(filterOrders([...allOrders]));
  const orders = paginateOrders(filteredAndSortedOrders, currentPage, itemsPerPage);

  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const prevPage = () => setCurrentPage((prevPage) => prevPage - 1);

  return (
    <>
      {/* Table Content */}
      <table className="my-table mt-2">
        <thead className="table-head">
          <tr>
            <th className="col-lg-2">ID</th>
            <th className="col-lg-1">Paid On</th>
            <th className="col-lg-1">Amount</th>
            <th className="col-lg-2">Order Id</th>
            <th className="col-lg-1">Method</th>
            <th className="col-lg-2">Gateway</th>
            <th className="col-lg-1">Paid By</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {orders.map((order) => (
            <tr
              key={order.id}
              onClick={() => {
                handleRowClick(order);
              }}
              style={{ cursor: "pointer" }}
            >
              <td>{order.id}</td>
              <td>{order.datePaid}</td>
              <td>₱ {order.paidAmount}</td>
              <td>{order.orderId}</td>
              <td>{order.paymentMethod}</td>
              <td>{order.paymentGateway}</td>
              <td>{order.paidBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-end">
        <div className="pagination justify-content-end">
          {currentPage > 1 && (
            <a href="#" onClick={prevPage}>
              &laquo; Previous
            </a>
          )}
          {[...Array(Math.ceil(filteredAndSortedOrders.length / itemsPerPage))].map(
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
          {currentPage < Math.ceil(filteredAndSortedOrders.length / itemsPerPage) && (
            <a href="#" onClick={nextPage}>
              Next &raquo;
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default TablePayment;
