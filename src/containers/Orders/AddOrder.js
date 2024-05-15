import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { auth, firestore, collection, addDoc } from "../../api/firebaseScript"; // Import Firebase functions

import ArrowBack from "../../assets/Arrow-back.svg";
import ArrowNext from "../../assets/Arrow-next.svg";
import ArrowBackHover from "../../assets/Arrow-back-hover.svg";

import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import CardHeader from "./components/Card/CardHeader";
import Card from "./components/Card/Card";
import Sidebar from "../components/Sidebar";
import Modal from "react-modal"; // Import react-modal

import Navbar from "../components/Navbar";

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

const AddOrder = () => {
  const navigate = useNavigate();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const [customerName, setCustomerName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [filledDate, setFilledDate] = useState("");
  const [jobOrderNo, setJobOrderNo] = useState("");
  const [depositAmount, setDepositAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [address, setAddress] = useState("");

  const [item1Name, setItem1Name] = useState("");
  const [item1Price, setItem1Price] = useState("");
  const [item1Qty, setItem1Qty] = useState("");

  const [item2Name, setItem2Name] = useState("");
  const [item2Price, setItem2Price] = useState("");
  const [item2Qty, setItem2Qty] = useState("");

  const [item3Name, setItem3Name] = useState("");
  const [item3Price, setItem3Price] = useState("");
  const [item3Qty, setItem3Qty] = useState("");

  const [item4Name, setItem4Name] = useState("");
  const [item4Price, setItem4Price] = useState("");
  const [item4Qty, setItem4Qty] = useState("");

  const [item5Name, setItem5Name] = useState("");
  const [item5Price, setItem5Price] = useState("");
  const [item5Qty, setItem5Qty] = useState("");

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);

  const [items, setItems] = useState([{ name: "", price: "", qty: "" }]);

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${month}-${day}-${year}`;

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };

  const goBack = () => {
    navigate(-1);
  };
  const parseNumber = (value) => {
    // Try to parse the value as a number
    const parsedValue = parseFloat(value);
    // If parsing fails, return 0
    return isNaN(parsedValue) ? 0 : parsedValue;
  };

  const handleInputChange = (fieldName, value, index) => {
    console.log(fieldName);
     if (fieldName.includes("Item")) {
       
        if (!isNaN(index) && index >= 0 && index < items.length) {
          const updatedItems = [...items];
          updatedItems[index].name = value;
          setItems(updatedItems);
        }
      } else if (fieldName.includes("Price")) {
        if (!isNaN(index) && index >= 0 && index < items.length) {
          const updatedItems = [...items];
          updatedItems[index].price = value;
          setItems(updatedItems);
        }
      } else if (fieldName.includes("Qty")) {
        if (!isNaN(index) && index >= 0 && index < items.length) {
          const updatedItems = [...items];
          updatedItems[index].qty = value;
          setItems(updatedItems);
        }
      }
      console.log("Sdfsefsfe", items);
      
    switch (fieldName) {
      case "Customer Name":
        setCustomerName(value);
        break;
      case "Mobile No.":
        setMobileNumber(value);
        break;
      case "Due Date":
        setEventDate(value);
        break;
      case "Job Order No.":
        setJobOrderNo(value);
        break;
      case "Deposit Amount":
        setDepositAmount(value);
        break;
      // case "Total Price":
      //   setTotalAmount(value);
      //   break;
      case "Address":
        setAddress(value);
        break;
      case "Email":
        setEmail(value);
        break;
      case "Date Ordered":
        setFilledDate(value);
        break;
      case "Status":
        setStatus(value);
        break;
      default:
        break;
    }


    
  };

  const fittingOptions = [
    "Designing",
    "Creation in Progress",
    "Available for Pickup",
    "Completed",
    "Cancelled",
  ];

  // Handler for dropdown change
  const handleFittingChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = async (event) => {
  event.preventDefault();

  // Check if any required field is empty
  if (
    customerName === "" ||
    mobileNumber === "" ||
    eventDate === "" ||
    filledDate === "" ||
    jobOrderNo === "" ||
    depositAmount === "" ||
    address === "" ||
    status === ""
  ) {
    // If any required field is empty, show a modal prompting the user to fill all required fields
    setShowErrorModal(true);
    return;
  }

  // Compute total price based on items
  const totalPrice = items.reduce((total, item) => total + (item.price * item.qty), 0);

  // Create the order object with dynamic item fields and total price
  const order = {
    fullName: customerName,
    phoneNumber: mobileNumber,
    customerEmail: email,
    dueDate: eventDate,
    filledupDate: filledDate,
    jobOrderID: jobOrderNo,
    totalprice: totalPrice, // Update total price here
    deposit: depositAmount,
    paidAmount: depositAmount,
    balance: Math.max(parseNumber(depositAmount) - totalPrice, 0), // Compute balance based on total price
    address: address,
    status: status,
  };

  // Iterate over items array and add item fields to the order object
  items.forEach((item, index) => {
    order[`item${index + 1}name`] = item.name;
    order[`item${index + 1}price`] = item.price;
    order[`item${index + 1}qty`] = item.qty;
  });
  //
  try {
    // Add the order to Firestore
    const docRef = await addDoc(collection(firestore, "orders"), order);
    console.log("Order added with ID: ", docRef.id);

    const orderId = docRef.id; // Get the ID of the newly added order
    setOrderId(orderId); // Set orderId state to display in the modal
    setShowSuccessModal(true); // Show success modal
  } catch (error) {
    console.error("Error adding order: ", error);
    // Handle error
  }
};

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    navigate(-1); 
  };

  const CardCustomerDetails = [
    {
      bordered: false,
      fields: [
        {
          fieldType: "input",
          label: "Customer Name",
          type: "text",
          placeholder: "Last Name, First Name MI.",
          width: 12,
        },
      ],
    },
    {
      bordered: false,
      fields: [
        {
          fieldType: "input",
          label: "Address",
          type: "text",
          placeholder: "Street/City/Region",
          width: 12,
        },
      ],
    },
    {
      bordered: false,
      fields: [
        {
          fieldType: "input",
          label: "Email",
          type: "text",
          placeholder: "blank@gmail.com",
          width: 7,
        },
        {
          fieldType: "input",
          label: "Mobile No.",
          type: "tel",
          placeholder: "09XX-XXX-XXXX",
          width: 5,
        },
      ],
    },
  ];
  const CardOrderOverview = [
    {
      bordered: false,
      fields: [
        {
          fieldType: "input",
          label: "Job Order No.",
          type: "text",
          placeholder: "e.g. 000123",
          width: 6,
        },
        {
          fieldType: "select",
          label: "Status",
          width: 6,
          options: [
            { label: "Designing" },
            { label: "Creation in Progress" },
            { label: "Available for Pickup" },
            { label: "Completed" },
            { label: "Cancelled" },
          ],
        },
      ],
    },
    {
      bordered: true,
      fields: [
        {
          fieldType: "input",
          label: "Deposit Amount",
          type: "number",
          placeholder: "Amount deposited by client (e.g. 1000)",
          width: 12,
        },
      ],
    },
    {
      bordered: false,
      fields: [
        {
          fieldType: "input",
          label: "Filled Date/Date Ordered",
          type: "date",
          width: 6,
          value: { formattedDate },
        },
        { fieldType: "input", label: "Due Date", type: "date", width: 6 },
      ],
    },
  ];

  // Function to remove an item based on its index
const handleRemoveItem = (indexToRemove) => {
  // Filter out the item with the specified index
  const updatedItems = items.filter((_, index) => index !== indexToRemove);
  console.log("updatedItems", updatedItems);
  setItems(updatedItems);
};

  const handleItemInputChange = (index, fieldName, value) => {
    
    const newItems = [...items];
    newItems[index] = {
      ...newItems[index],
      [fieldName]: value,
    };
    console.log("newDDD")
    setItems(newItems);
  };
  const handleAddItem = (e) => {
    setItems([...items, { name: "", price: "", qty: "" }]);
  };
  // commented for visual difference
  // const CardAddItems = [
  //   ...items.map((item, index) => ({
  //     bordered: true,
  //     fields: [
  //       {
  //         fieldType: "input",
  //         // label: `Item name #${index + 1}`,
  //         label: `Name of Item`,
  //         type: "text",
  //         placeholder: "",
  //         width: 6,
  //         value: item.name,
  //         onChange: (e) => handleItemInputChange(index, "name", e.target.value),
  //       },
  //       {
  //         fieldType: "input",
  //         // label: `Item #${index + 1} Price`,
  //         label: `Price`,
  //         type: "number",
  //         placeholder: "",
  //         width: 3,
  //         value: item.price,
  //         onChange: (e) =>
  //           handleItemInputChange(index, "price", e.target.value),
  //       },
  //       {
  //         fieldType: "input",
  //         // label: `Item #${index + 1} Qty`,
  //         label: `Qty`,
  //         type: "number",
  //         placeholder: "",
  //         width: 1,
  //         value: item.qty,
  //         onChange: (e) => handleItemInputChange(index, "qty", e.target.value),
  //       },
  //       {
  //         fieldType: "button",
  //         text: "Add Item",
  //         width: "2"
  //       }
  //     ],
  //   })),
  // ];
    console.log("itemData", items)
   const CardAddItems = [
    ...items.map((item, index) => ({
      bordered: true,
      fields: [
        {
          fieldType: "input",
          label: `Name of Item`,
          type: "text",
          index: index,
          placeholder: "",
          width: 4,
          value: item.name,
        },
        {
          fieldType: "input",
          label: `Price`,
          type: "number",
          index: index,
          placeholder: "",
          width: 3,
          value: item.price,
        },
        {
          fieldType: "input",
          label: `Qty`,
          type: "number",
          index: index,
          placeholder: "",
          width: 1,
          value: item.qty,
        },
        {
          fieldType: "buttonOrder",
          text: "Add Item",
          width: 2,
          onClick: handleAddItem,
        },
        {
        fieldType: "buttonOrder",
        text: "Remove Item",
        width: 2,
        onClick: () => handleRemoveItem(index), // Call handleRemoveItem with item's id
      },
      ],
    })),
    {
      bordered: false,
      fields: [
        {
          fieldType: "table",
          tableData: items.map(item => ({
            Qty: item.qty,
            Item: item.name,
            Price: "₱ " + item.price,
          })),
          tableColumns: ["Qty", "Item", "Price"],
          total: items.reduce((acc, item) => acc + (item.price * item.qty), 0),
          deposit: depositAmount,
          balance: items.reduce((acc, item) => acc + (item.price * item.qty), 0) - depositAmount,
          width: 12,
        },
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
                        type="submit"
                        className="btn btn-green mr-2 d-flex align-items-center"
                        onClick={handleSubmit}
                      >
                        <FaArrowRight className="mr-3" />
                        <h1 className="heading">Proceed to Order</h1>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 mt-4">
                    <Card
                      header="Customer Details"
                      subheading="Step 1"
                      rows={CardCustomerDetails}
                      onChange={handleInputChange}
                    />
                    {/* I have commented the select here for visual difference */}
                    {/* <div className="form-group">
                      <label htmlFor="fittingSchedule">Status</label>
                      <select
                        className="form-control"
                        id="fittingSchedule"
                        value={status}
                        onChange={handleFittingChange}
                      >
                        <option value="">Select status</option>
                        {fittingOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div> */}
                  </div>
                  <div className="col-lg-6 mt-4">
                    <Card
                      header="Order Overview"
                      subheading="Step 2"
                      rows={CardOrderOverview}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <hr className="my-4 mx-3" />
                <div className="row">
                  <div className="col-lg-12">
                    <Card
                      header="Add Items"
                      subheading="Step 3"
                      rows={CardAddItems}
                      onChange={handleInputChange}
                    />
                    {/* Commented */}
                    {/* <button
                      type="button"
                      className="btn btn-green mr-2 d-flex align-items-center"
                      onClick={handleAddItem}
                    >
                      Add Item
                    </button> */}

                    {/* <label className="w-100 card-input-label">
                      Total Price
                    </label>
                    <input
                      type="number"
                      disabled
                      className="w-100 card-input mb-2"
                      value={totalAmount}
                    />
                    <label className="w-100 card-input-label">Balance</label>
                    <input
                      type="number"
                      disabled
                      className="w-100 card-input mb-2"
                      value={Math.max(totalAmount - depositAmount, 0)}
                    /> */}
                  </div>
                </div>
              </form>

              <div className="card mt-4">
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
                        type="submit"
                        className="btn btn-green mr-2 d-flex align-items-center"
                        onClick={handleSubmit}
                      >
                        <FaArrowRight className="mr-3" />
                        <h1 className="heading">Proceed to Order</h1>
                      </button>
                    </div>
                  </div>
              {showSuccessModal && (
                <Modal
                  isOpen={showSuccessModal}
                  onRequestClose={handleCloseSuccessModal}
                  style={customStyles}
                  contentLabel="Success Modal"
                >
                  <h2 className="text-2xl font-bold mb-4 text-black ">
                    Order Added Successfully!
                  </h2>
                  <p className="text-black  mb-6">
                    Your order ID is
                    <span className="text-black ">{orderId}</span>.
                  </p>
                  <button
                    onClick={handleCloseSuccessModal}
                    className="bg-blue-500 hover:bg-blue-600 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Close
                  </button>
                </Modal>
              )}
              <Modal
                isOpen={showErrorModal}
                onRequestClose={handleCloseErrorModal}
                style={customStyles}
                contentLabel="Error Modal"
              >
                <h2 className="text-black">Please fill all required fields</h2>{" "}
                <br />
                <p className="text-black">{showErrorMessage}</p>
                <button onClick={handleCloseErrorModal} className="text-black">
                  Close
                </button>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrder;
