import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  firestore,
  collection,
  addDoc,
  createUserWithEmailAndPassword,
} from "../../../api/firebaseScript"; // Import Firebase functions
import { db } from "../../../firebase";

import ArrowBack from "../../../assets/Arrow-back.svg";
import ArrowNext from "../../../assets/Arrow-next.svg";
import ArrowBackHover from "../../../assets/Arrow-back-hover.svg";

import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import Card from "../../Orders/components/Card/Card";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const AddUser = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const addUserdata = async () => {
    console.log("dataofuser", firstName+" "+lastName+" "+emailAddress+" "+mobileNumber+" "+password )
    createUserWithEmailAndPassword(auth, emailAddress, password)
      .then((userCredential) => {
        // User created successfully, you can now add user data to Firestore
        const user = userCredential.user;
        const users = {
          firstName: firstName,
          lastName: lastName,
          emailAddress: emailAddress,
          phoneNumber: mobileNumber,
          password: password,
          dateAdded: new Date(),
          addedBy: localStorage.getItem('email'),
          uid: user.uid,
        };

        // Add user data to Firestore using collection and addDoc methods
        return addDoc(collection(firestore, "users"), users);
      })
      .then(() => {
        navigate("/admin/users");
      })
      .catch((error) => {});
  };

  const newAdminDetails = [
    {
      bordered: true,
      fields: [
        {
          fieldType: "input",
          label: "First Name",
          type: "text",
          placeholder: "First Name",
          width: 6,
          id: "firstName",
        },
        {
          fieldType: "input",
          label: "Last Name",
          type: "text",
          placeholder: "Last Name",
          width: 6,
          id: "lastName",
        },
        {
          fieldType: "input",
          label: "Email Address",
          placeholder: "example@email.com",
          type: "text",
          width: 4,
          id: "emailAddress",
        },
        {
          fieldType: "input",
          label: "Mobile Number",
          type: "tel",
          placeholder: "09XX-XXX-XXXX",
          width: 2,
          id: "mobileNumber",
        },
      ],
    },
    {
      bordered: false,
      fields: [
        {
          fieldType: "input",
          label: "Password",
          type: "password",
          placeholder: "Set your password",
          width: 4,
          id: "password",
        },
        {
          fieldType: "input",
          label: "Confirm Password",
          type: "password",
          placeholder: "Re-enter your password",
          width: 4,
        },
        // {
        //   fieldType: "button",
        //   text: "Add New User",
        //   onClick: addUserdata,
        // },
      ],
    },
  ];

  const handleInputChange = (fieldName, value) => {
    switch (fieldName) {
      case "First Name":
        setFirstName(value);
        break;
      case "Last Name":
        setLastName(value);
        break;
      case "Email Address":
        setEmailAddress(value);
        break;
      case "Password":
        setPassword(value);
        break;
      case "Mobile Number":
        setMobileNumber(value);
        break;
      // Handle other fields similarly
      default:
        break;
    }
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
                      <button className="btn btn-green mr-2 d-flex align-items-center" onClick={addUserdata}>
                        <FaArrowRight className="mr-3" />
                        <h1 className="heading">Add New User</h1>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <form>
                <div className="row">
                  {/* Left Div */}
                  <div className="col-lg-12 mt-4">
                    <Card
                      header="New Admin User"
                      subheading=""
                      rows={newAdminDetails}
                      onChange={handleInputChange}
                    />
                  </div>
                 
                </div>
              </form> 
              <br/>
              {/* <button className="btn btn-green mr-2 d-flex align-items-center" onClick={addUserdata}>
                        <FaArrowRight className="mr-3" />
                        <h1 className="heading">Add User</h1>
                      </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
