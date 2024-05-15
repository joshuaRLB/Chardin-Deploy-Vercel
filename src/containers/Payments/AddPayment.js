import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import Card from "../Orders/components/Card/Card";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Table from "../Orders/components/OrderList";
import OrderList from "../Orders/components/OrderList";
import { doc, setDoc, runTransaction, getDoc } from "firebase/firestore";
import { firestore } from "../../api/firebaseScript";
import Modal from "react-modal";

const AddPayment = () => {
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState(null);
  const [paymentId, setPaymentId] = useState(null);
  const [paidAmount, setPaidAmount] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [paymentGateway, setPaymentGateway] = useState(null);
  const [paidBy, setPaidBy] = useState(null);
  const [datePaid, setDatePaid] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    navigate(-1); // Redirect to orders page
  };
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      borderRadius: "10px",
      padding: "30px",
      maxWidth: "400px",
      width: "80%",
      textAlign: "center",
    },
  };
  const validateFields = () => {
    if (
      !orderId ||
      !paidAmount ||
      !paymentMethod ||
      !paymentGateway ||
      !paidBy ||
      !datePaid
    ) {
      alert("All fields are required!");
      return false;
    }
    return true;
  };

  const checkOrderIdExists = async () => {
    const orderRef = doc(firestore, "orders", orderId);
    const orderDoc = await getDoc(orderRef);
    return orderDoc.exists();
  };

  const addPaymentToFirestore = async () => {
    // Validate fields
    console.log(
      "DATA123",
      orderId +
        " " +
        paidAmount +
        " " +
        paymentMethod +
        " " +
        paymentGateway +
        " " +
        paidBy +
        " " +
        datePaid
    );
    if (!validateFields()) {
      return;
    }

    try {
      const orderExists = await checkOrderIdExists();
      if (!orderExists) {
        alert("The provided order ID doesn't exist in the orders database.");
        return;
      }

      const paymentData = {
        orderId: orderId,
        paidAmount: paidAmount,
        paymentMethod: paymentMethod,
        paymentGateway: paymentGateway,
        paidBy: paidBy,
        datePaid: datePaid,
      };

      const orderRef = doc(firestore, "orders", orderId);
      // Generate a random 7-digit number
      const randomNumber = Math.floor(1000000 + Math.random() * 9000000);

      // Append the random number to orderId with a hyphen
      const orderIdWithRandomNumber = `${orderId}-${randomNumber}`;

      // Now, you can use orderIdWithRandomNumber in your code
      const paymentRef = doc(firestore, "payment", orderIdWithRandomNumber);

      await runTransaction(firestore, async (transaction) => {
        // Get current order data
        const orderDoc = await transaction.get(orderRef);
        const currentPaidAmount = orderDoc.data().paidAmount || 0;
        const currentPaidBalance = orderDoc.data().balance || 0;
        // Update payment collection
        await transaction.set(paymentRef, paymentData);
        setPaymentId(paymentRef.id);

        // Update orders collection with the new paidAmount
        const updatedPaidAmount =
          parseInt(currentPaidAmount) + parseInt(paidAmount);
        const updatedBalanceAmount =
          parseInt(currentPaidBalance) - parseInt(paidAmount);

        transaction.update(orderRef, {
          paidAmount: updatedPaidAmount,
          balance: updatedBalanceAmount,
        });
      });
      setShowSuccessModal(true); // Show success modal

      console.log("Payment and order updated successfully.");
    } catch (error) {
      console.error("Error updating payment and order: ", error);
    }
  };

  const handleInputChange = (fieldName, value) => {
    console.log(fieldName);
    switch (fieldName) {
      case "Order ID":
        setOrderId(value);
        break;
      case "Amount in Philippine Peso (₱)":
        setPaidAmount(value);
        break;
      case "Payment Method":
        setPaymentMethod(value);
        if (value === "Cash") {
          setPaymentGateway("Cash");
        }
        break;
      case "Payment Gateway":
        setPaymentGateway(value);
        break;
      case "Paid By":
        setPaidBy(value);
        break;
      case "Date Paid":
        setDatePaid(value);
        break;

      // Handle other fields similarly.
      default:
        break;
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const CardCustomerDetails = [
    {
      bordered: false,
      fields: [
        {
          fieldType: "input",
          label: "Order ID",
          type: "text",
          placeholder: orderId ? orderId : "Manually input order ID or..",
          width: 12,
          value: orderId,
          orderProcess: orderId,
        },
      ],
    },
    {
      bordered: true,
      fields: [
        {
          fieldType: "input",
          label: "Amount in Philippine Peso (₱)",
          type: "number",
          placeholder: "e.g. ₱10,000.00",
          width: 12,
        },
        {
          fieldType: "select",
          label: "Payment Method",
          width: 6,
          options: [
            { label: "Cash" },
            { label: "Bank Transfer" },
            { label: "E-Wallet" },
            { label: "Credit Card" },
            { label: "Cheque" },
          ],
        },
        {
          fieldType: "select",
          label: "Payment Gateway",
          width: 6,
          options: [{ label: "BDO" }, { label: "BPI" }, { label: "Gcash" }],
        },
      ],
    },
    {
      bordered: false,
      fields: [
        {
          fieldType: "input",
          label: "Paid By",
          placeholder: "e.g. John Smith",
          width: 8,
          type: "text",
        },
        { fieldType: "input", label: "Date Paid", type: "date", width: 4 },
      ],
    },
  ];
  const CardCustomerDetailsCash = [
    {
      bordered: false,
      fields: [
        {
          fieldType: "input",
          label: "Order ID",
          type: "text",
          placeholder: orderId ? orderId : "Manually input order ID or..",
          width: 12,
          value: orderId,
        },
      ],
    },
    {
      bordered: true,
      fields: [
        {
          fieldType: "input",
          label: "Amount in Philippine Peso (₱)",
          type: "number",
          placeholder: "e.g. ₱10,000.00",
          width: 12,
        },
        {
          fieldType: "select",
          label: "Payment Method",
          width: 12,
          options: [
            { label: "Cash" },
            { label: "Bank Transfer" },
            { label: "E-Wallet" },
            { label: "Credit Card" },
            { label: "Cheque" },
          ],
        },
      ],
    },
    {
      bordered: false,
      fields: [
        {
          fieldType: "input",
          label: "Paid By",
          placeholder: "e.g. John Smith",
          width: 8,
          type: "text",
        },
        { fieldType: "input", label: "Date Paid", type: "date", width: 4 },
      ],
    },
  ];
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
              {/* Heading */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-title d-flex justify-content-between align-items-center">
                      <h1 className="heading text-white">
                        <button
                          className="btn d-flex align-items-center"
                          onClick={goBack}
                        >
                          <FaArrowLeft className="mr-3" />
                          Back
                        </button>
                      </h1>
                      <button
                        className="btn btn-green mr-2 d-flex align-items-center"
                        onClick={addPaymentToFirestore}
                      >
                        <FaArrowRight className="mr-3" />
                        <h1 className="heading">Add Payment</h1>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {" "}
                <br />
                <div className="col-md-6 mt-4">
                  {paymentMethod === "Cash" ? (
                    <Card
                      header="Order Details"
                      subheading="Step 1"
                      rows={CardCustomerDetailsCash}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <Card
                      header="Order Details"
                      subheading="Step 1"
                      rows={CardCustomerDetails}
                      onChange={handleInputChange}
                    />
                  )}
                </div>
                <div className="col-md-6">
                  <OrderList setOrderId={setOrderId} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={showSuccessModal}
        onRequestClose={handleCloseSuccessModal}
        style={customStyles}
        contentLabel="Success Modal"
      >
        <h2 className="text-2xl font-bold mb-4 text-black ">
          Payment Added Successfully!
        </h2>
        <p className="text-black  mb-6">
          Your Payment ID is <span className="text-black ">{paymentId}</span>.
        </p>
        <button
          onClick={handleCloseSuccessModal}
          className="bg-blue-500 hover:bg-blue-600 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default AddPayment;
