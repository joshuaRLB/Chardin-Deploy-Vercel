import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  auth,
  firestore,
  collection,
  addDoc,
  getDoc,
  doc,
  updateDoc
} from "../../api/firebaseScript"; // Import Firebase functions

import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import CardHeader from "./components/Card/CardHeader";
import Card from "./components/Card/Card";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Modal from "react-modal"; // Import react-modal

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


const EditOrder = () => {
  const { orderId } = useParams(); // Get order ID from URL parameters
  const navigate = useNavigate();
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

  const [itemData, setItemData] = useState({});


    const [showErrorMessage, setShowErrorMessage] = useState("");
   const [showErrorModal, setShowErrorModal] = useState(false);
  
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

  useEffect(() => {
    const calculateTotalAmount = () => {
      const item1Total = parseNumber(item1Price) * parseNumber(item1Qty);
      const item2Total = parseNumber(item2Price) * parseNumber(item2Qty);
      const item3Total = parseNumber(item3Price) * parseNumber(item3Qty);
      const item4Total = parseNumber(item4Price) * parseNumber(item4Qty);
      const item5Total = parseNumber(item5Price) * parseNumber(item5Qty);
      // Calculate totals for other items...

      const total =
        item1Total + item2Total + item3Total + item4Total + item5Total;
      console.log("total ", total);
      setTotalAmount(total);
    };

    calculateTotalAmount();
  }, [
    item1Price,
    item1Qty,
    item2Price,
    item2Qty,
    item3Price,
    item3Qty,
    item4Price,
    item4Qty,
    item5Price,
    item5Qty,
  ]);

 useEffect(() => {
  const fetchOrder = async () => {
    try {
      const orderDoc = await getDoc(doc(firestore, "orders", orderId));
      if (orderDoc.exists()) {
        const orderData = orderDoc.data();
        // Populate state variables with order details

        setCustomerName(orderData.fullName);
        setMobileNumber(orderData.phoneNumber);
        setEventDate(orderData.dueDate);
        setFilledDate(orderData.filledupDate);
        setJobOrderNo(orderData.jobOrderID);
        setDepositAmount(orderData.deposit);
        setTotalAmount(orderData.totalprice);
        setAddress(orderData.address);
        setEmail(orderData.customerEmail);
        setStatus(orderData.status);

        // Create an object to hold item data
        const itemData = {};
        // Populate the item data object dynamically
        for (let i = 1; i <= 5; i++) {
          const itemName = orderData[`item${i}name`];
          const itemPrice = orderData[`item${i}price`];
          const itemQty = orderData[`item${i}qty`];
          if (itemName) {
            itemData[`item${i}`] = { name: itemName, price: itemPrice, qty: itemQty };
          }
        }
        // Set the item data object
        setItemData(itemData);

        // Populate other state variables...
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching order:", error);
    }
  };

  fetchOrder();
}, [orderId]);

  const handleInputChange = (fieldName, value) => {
    console.log(fieldName);
    switch (fieldName) {
      case "Customer Name":
        setCustomerName(value);
        break;
      case "Mobile Number":
        setMobileNumber(value);
        break;
      case "Event Date":
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
      case "Filled Date/Date Ordered":
        setFilledDate(value);
        break;

      case "Item name #1":
        setItem1Name(value);
        break;
      case "Item #1 Price":
        setItem1Price(value);
        break;

      case "Item #1 Qty":
        setItem1Qty(value);
        break;

      case "Item name #2":
        setItem2Name(value);
        break;
      case "Item #2 Price":
        setItem2Price(value);
        break;

      case "Item #2 Qty":
        setItem2Qty(value);
        break;

      case "Item name #3":
        setItem3Name(value);
        break;
      case "Item #3 Price":
        setItem3Price(value);
        break;

      case "Item #3 Qty":
        setItem3Qty(value);
        break;

      case "Item name #4":
        setItem4Name(value);
        break;
      case "Item #4 Price":
        setItem4Price(value);
        break;

      case "Item #4 Qty":
        setItem4Qty(value);
        break;

      case "Item name #5":
        setItem5Name(value);
        break;
      case "Item #5 Price":
        setItem5Price(value);
        break;

      case "Item #5 Qty":
        setItem5Qty(value);
        break;

      // Handle other fields similarly
      default:
        break;
    }
  };

  const fittingOptions = [
  "Designing", "Creation in Progress", "Available for Pickup", "Completed", "Cancelled"
  ];

  // Handler for dropdown change
  const handleFittingChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = async (event) => {
  event.preventDefault();
 var validation = 0;
  if (item1Name === "" && item2Name === "" && item3Name === "" && item4Name === "" && item5Name === "") {
    setShowErrorMessage("Please add at least one item");
    validation = 1;
    
  }
 // Check if any required field is empty
  if (
    customerName === "" ||
    mobileNumber === "" ||
    eventDate === "" ||
    filledDate === "" ||
    jobOrderNo === "" ||
    depositAmount === "" ||
    address === "" ||
    status === "" ||
    (item1Name === "" && item2Name === "" && item3Name === "" && item4Name === "" && item5Name === "")
    ||
    (item1Price === "" && item2Price === "" && item3Price === "" && item4Price === "" && item5Price === "")
    ||
    (item1Qty === "" && item2Qty === "" && item3Qty === "" && item4Qty === "" && item5Qty === "")
  ) {
    // If any required field is empty, show a modal prompting the user to fill all required fields
    setShowErrorModal(true);
    validation = 1;
    return;
  }

  // Check if at least one item is added
 
  if(validation==0){
  const order = {
    fullName: customerName,
    phoneNumber: mobileNumber,
    customerEmail: email,
    dueDate: eventDate,
    filledupDate: filledDate,
    jobOrderID: jobOrderNo,
    totalprice: totalAmount,
    deposit: depositAmount,
      balance: Math.max(parseNumber(depositAmount) - parseNumber(totalAmount), 0), // Set balance to 0 if negative
  address: address,
    status: status,
    item1name: item1Name,
    item1price: item1Price,
    item1qty: item1Qty,
    item2name: item2Name,
    item2price: item2Price,
    item2qty: item2Qty,
    item3name: item3Name,
    item3price: item3Price,
    item3qty: item3Qty,
    item4name: item4Name,
    item4price: item4Price,
    item4qty: item4Qty,
    item5name: item5Name,
    item5price: item5Price,
    item5qty: item5Qty,
  };

  try {
    // Update the order in Firestore
    await updateDoc(doc(firestore, "orders", orderId), order);
    console.log("Order updated with ID: ", orderId);

    // Redirect or perform any other actions after successful submission
    navigate("/admin/orders"); // Redirect to a success page
  } catch (error) {
    console.error("Error updating order: ", error);
    // Handle error
  }
}
};
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
  // placeholder rows
 const CardCustomerDetails = [
  {
    bordered: true,
    fields: [
      {
        fieldType: "input",
        label: "Customer Name",
        type: "text",
        placeholder: customerName,
        width: 6,
      },
      {
        fieldType: "input",
        label: "Email",
        type: "text",
        placeholder: email,
        width: 6,
      },
      {
        fieldType: "input",
        label: "Address",
        type: "text",
        placeholder: address,
        width: 8,
      },
      {
        fieldType: "input",
        label: "Mobile Number",
        type: "tel",
        placeholder: mobileNumber,
        width: 4,
      },
    ],
  },
  {
    bordered: false,
    fields: [
      { fieldType: "input", label: "Filled Date/Date Ordered", type: "date", width: 4 , placeholder: filledDate},
      {
        fieldType: "input",
        label: "Event Date",
        type: "date",
        placeholder: eventDate,
        width: 6,
      },
      
    ],
  },
];

const CardOrderOverview = [
  {
    bordered: true,
    fields: [
      {
        fieldType: "input",
        label: "Job Order No.",
        type: "text",
        placeholder: jobOrderNo,
        width: 8,
      },
    ],
  },
  {
    bordered: false,
    fields: [
      // {
      //   fieldType: "input",
      //   label: "Deposit Amount",
      //   type: "number",
      //   placeholder: depositAmount,
      //   width: 12,
      // },
    ],
  },
];

const CardAddItems = Object.keys(itemData).map((key, index) => ({
  bordered: true,
  fields: [
    {
      fieldType: "input",
      label: `Item name #${index + 1}`,
      type: "text",
      placeholder: itemData[key].name,
      width: 4,
    },
    {
      fieldType: "input",
      label: `Item #${index + 1} Price`,
      type: "number",
      placeholder: itemData[key].price,
      width: 4,
    },
    {
      fieldType: "input",
      label: `Item #${index + 1} Qty`,
      type: "number",
      placeholder: itemData[key].qty,
      width: 4,
    },
  ],
}));

// Add an empty bordered object at the end
CardAddItems.push({ bordered: false, fields: [] });


  return (
    <div id="page-top">
      <div id="wrapper">
        {/* Sidebar component */}
        <Sidebar
          isSidebarCollapsed={isSidebarCollapsed}
          toggleSidebar={toggleSidebar}
        />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            {/* Navbar component */}
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
  onClick={handleSubmit} // Call handleSubmit when clicked
>
  <FaArrowRight className="mr-3" />
  <h1 className="heading">Update Order</h1>
</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="row">
                  {/* Left Div */}
                  <div className="col-lg-5">
                    <Card
                      header="Customer Details"
                      subheading="Step 1"
                      rows={CardCustomerDetails}
                      onChange={handleInputChange}
                    />
                    <div className="form-group">
                      <label htmlFor="fittingSchedule">Fitting Status</label>
                      <select
                        className="form-control"
                        id="fittingSchedule"
                        value={status}
                        onChange={handleFittingChange}
                      >
                        <option value="">Select fitting status</option>
                        {fittingOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <Card
                      header="Order Overview"
                      subheading="Step 2"
                      rows={CardOrderOverview}
                      onChange={handleInputChange}
                    />
                  </div>
                  {/* Right Div */}

                  <div className="col-lg-7">
                    {/* Dropdown for fitting schedule */}

                    <div>
                      
                      <Card
                        header="Add Items"
                        subheading="Step 3"
                        rows={CardAddItems}
                        onChange={handleInputChange}
                      />
                      <label className="w-100 card-input-label">
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
                      />
                    </div>
                  </div>
                </div>
                {/* <button type="submit">Update Order</button> */}
              </form>
               <Modal
        isOpen={showErrorModal}
        onRequestClose={handleCloseErrorModal}
        style={customStyles}
        contentLabel="Error Modal"
      >
        <h2 className="text-black">Please fill all required fields</h2> <br/><p className="text-black">{showErrorMessage}</p>
        <button onClick={handleCloseErrorModal} className="text-black">Close</button>
      </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditOrder;
