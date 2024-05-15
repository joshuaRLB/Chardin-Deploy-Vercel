import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { auth, firestore, collection, addDoc, getDoc, doc, updateDoc } from "../../../api/firebaseScript";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Card from "../../Orders/components/Card/Card";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const EditUser = () => {
  const { userID } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const userDoc = await getDoc(doc(firestore, "users", userID));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setFirstName(userData.firstName);
          setLastName(userData.lastName);
          setEmailAddress(userData.emailAddress);
          setMobileNumber(userData.phoneNumber);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching order:", error);
      }
    };

    fetchOrder();
    console.log("user Data", firstName +" "+lastName +" "+userID)
  }, [userID]);

  const updateUserdata = async () => {
    // Check if any required field is empty
    if (!firstName || !lastName || !emailAddress || !mobileNumber || !password || !confirmPassword) {
      alert("Please input all fields");
      return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }

    const userRef = doc(firestore, "users", userID);
    const newData = {
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress,
      phoneNumber: mobileNumber,
      password: password
    };

    try {
      await updateDoc(userRef, newData);
      alert("User information edited successfully!")
      navigate(-1);
    } catch (error) {
      console.error("Error updating user: ", error);
    }
  };

  const userDetails = [
    {
      bordered: true,
      fields: [
        {
          fieldType: "input",
          label: "First Name",
          type: "text",
          placeholder: firstName,
          width: 6,
          id: "firstName",
        },
        {
          fieldType: "input",
          label: "Last Name",
          type: "text",
          placeholder: lastName,
          width: 6,
          id: "lastName",
        },
        {
          fieldType: "input",
          label: "Email Address",
          placeholder: emailAddress,
          type: "text",
          width: 4,
          id: "emailAddress",
        },
        {
          fieldType: "input",
          label: "Mobile Number",
          type: "tel",
          placeholder: mobileNumber,
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
          placeholder: password,
          width: 4,
          id: "password",
        },
        {
          fieldType: "input",
          label: "Confirm Password",
          type: "password",
          
          width: 4,
          id: "confirmPassword",
        },
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
      case "Confirm Password":
        setConfirmPassword(value);
        break;
      case "Mobile Number":
        setMobileNumber(value);
        break;
      default:
        break;
    }
  };

  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />
            <div className="container-fluid py-4">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-title d-flex justify-content-between align-items-center">
                      <h1 className="heading text-white">
                        <button className="btn d-flex align-items-center" onClick={goBack}>
                          <FaArrowLeft className="mr-3" />
                          Back
                        </button>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <form>
                <div className="row">
                  <div className="col-lg-12">
                    <Card header="Edit User" subheading="" rows={userDetails} onChange={handleInputChange} />
                  </div>
                </div>
              </form>
              <br />
              <button className="btn btn-green mr-2 d-flex align-items-center" onClick={updateUserdata}>
                <FaArrowRight className="mr-3" />
                <h1 className="heading">Update User</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
