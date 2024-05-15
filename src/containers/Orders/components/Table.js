// Table.js
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../api/firebaseScript";
import { Link } from "react-router-dom";
import Modal from "react-modal";

const OrderModal = ({ isOpen, onClose, order }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "none",
          borderRadius: "10px",
          padding: "30px",
          maxWidth: "80%",
          height: "600px",
          width: "500px",
          textAlign: "left",
          color: "#000",
          backgroundColor: "#fff",
        },
      }}
      contentLabel="Order Details Modal"
    >
      <h2 className="text-xl font-bold mb-4">Order Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 mb-4">
        <div>
          <p>
            <strong>Full Name:</strong> {order.fullName}
          </p>
          <p>
            <strong>Phone Number:</strong> {order.phoneNumber}
          </p>
          <p>
            <strong>Status:</strong> {order.status}
          </p>
          <p>
            <strong>Due Date:</strong> {order.dueDate}
          </p>
          <p>
            <strong>filled Date:</strong> {order.filledupDate}
          </p>
          <p>
            <strong>Total Price:</strong> {order.totalprice}
          </p>
        </div>
        <div>
          <p>
            <strong>Customer Email:</strong> {order.customerEmail}
          </p>
          <p>
            <strong>Address:</strong> {order.address}
          </p>
          <p>
            <strong>Job Order ID:</strong> {order.jobOrderID}
          </p>
          <p>
            <strong>Deposit:</strong> {order.deposit}
          </p>
          <p>
            <strong>Balance:</strong> {order.balance}
          </p>
        </div>
      </div>
      {order.item1name && (
        <>
          <h3 className="text-lg font-semibold mt-4 mb-2">Items</h3>
          <ul>
            {[1, 2, 3, 4, 5].map(
              (index) =>
                order[`item${index}name`] && (
                  <li key={index}>
                    <strong>Item {index}:</strong> {order[`item${index}name`]}{" "}
                    (Price: {order[`item${index}price`]}, Qty:{" "}
                    {order[`item${index}qty`]})
                  </li>
                )
            )}
          </ul>
        </>
      )}
      <button
        onClick={onClose}
        className="bg-blue-500 hover:bg-blue-600 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
      >
        Close
      </button>
    </Modal>
  );
};

const Table = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      const ordersCollection = collection(firestore, "orders");
      const ordersSnapshot = await getDocs(ordersCollection);
      const ordersData = ordersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrders(ordersData);
    };

    fetchOrders();
  }, []);

  const handleRowClick = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  return (
    <div>
      <table className="my-table mt-2">
        <thead className="">
          <tr>
            <th className="col-lg-1">Order ID</th>
            <th className="col-lg-2">Customer Name</th>
            <th className="col-lg-3">Items</th>
            <th className="col-lg-2">Due Date</th>
            <th className="col-lg-2">Balance</th>
            <th className="col-lg-1">Status</th>
            <th className="col-lg-1"></th>
          </tr>
        </thead>
        <tbody>
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
              <td>{order.dueDate}</td>
              <td>{order.totalprice - order.deposit}</td>
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
      {selectedOrder && (
        <OrderModal
          isOpen={!!selectedOrder}
          onClose={handleCloseModal}
          order={selectedOrder}
        />
      )}
    </div>
  );
};

export default Table;
