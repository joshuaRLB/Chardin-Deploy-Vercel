import React, { useState, useEffect } from "react";

const AddOrderModal = ({ showModal, toggleModal }) => {
  const [orderData, setOrderData] = useState({
    clientName: "",
    jobOrder: "",
    date: "",
    code: "",
    fittingDate: "",
    dueDate: "",
    quantity: "",
    items: "",
    price: "",
    totalPrice: "",
    deposit: "",
    balance: "",
    filedBy: "",
  });

  useEffect(() => {
    const currentDate = new Date().toISOString().slice(0, 10);
    setOrderData({ ...orderData, date: currentDate });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(orderData);
    toggleModal();
  };

  return (
    <div className="text-dark">
      {showModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Order</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggleModal}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="jobOrder" className="form-label">
                      Job Order
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="jobOrder"
                      name="jobOrder"
                      value={orderData.jobOrder}
                      onChange={handleChange}
                    />
                    <label htmlFor="clientName" className="form-label">
                      Client Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="clientName"
                      name="clientName"
                      value={orderData.clientName}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Fitting Date + Due date */}
                  <div className="mb-3 row">
                    <div className="col-4">
                      <label htmlFor="code" className="form-label">
                        Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="code"
                        name="code"
                        value={orderData.code}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="fittingDate" className="form-label">
                        Fitting Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="fittingDate"
                        name="fittingDate"
                        value={orderData.fittingDate}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="dueDate" className="form-label">
                        Due Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="dueDate"
                        name="dueDate"
                        value={orderData.dueDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">
                      Quantity
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="quantity"
                      name="quantity"
                      value={orderData.quantity}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="items" className="form-label">
                      Items
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="items"
                      name="items"
                      value={orderData.items}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                      Price
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="price"
                      name="price"
                      value={orderData.price}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="totalPrice" className="form-label">
                      Total Price
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="totalPrice"
                      name="totalPrice"
                      value={orderData.totalPrice}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="deposit" className="form-label">
                      Deposit
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="deposit"
                      name="deposit"
                      value={orderData.deposit}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="balance" className="form-label">
                      Balance
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="balance"
                      name="balance"
                      value={orderData.balance}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="filedBy" className="form-label">
                      Filed By
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="filedBy"
                      name="filedBy"
                      value={orderData.filedBy}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={toggleModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddOrderModal;
