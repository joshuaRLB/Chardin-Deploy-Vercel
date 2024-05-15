import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { auth, firestore, getDoc, doc, updateDoc, EmailAuthProvider, signInWithEmailAndPassword, reauthenticateWithCredential, updatePassword } from "../../../api/firebaseScript";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Card from "../../Orders/components/Card/Card";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import CryptoJS from 'crypto-js'; // Import CryptoJS

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

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  useEffect(() => {
    const fetchUser = async () => {
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
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [userID]);

  const updateUserdata = async () => {
    if (!firstName || !lastName || !emailAddress || !mobileNumber) {
      alert("Please input all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }

    const userRef = doc(firestore, "users", userID);

    try {
     

      if (password) {
        const encryptedPassword = localStorage.getItem(`password_${userID}`);
        const userPassword = CryptoJS.AES.decrypt(encryptedPassword, '<JHGFytguhkjhjgvcfrhtfjgh').toString(CryptoJS.enc.Utf8);
        // console.log("4567password", "edit - "+CryptoJS.AES.encrypt("123456789", '<JHGFytguhkjhjgvcfrhtfjgh').toString())
       
        const userCredential = await signInWithEmailAndPassword(auth, emailAddress, userPassword);
        await updatePassword(userCredential.user, password);
        console.log("Password updated successfully");
        
      }
    const newData = {
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress,
      phoneNumber: mobileNumber,
      password: CryptoJS.AES.encrypt(password, '<JHGFytguhkjhjgvcfrhtfjgh').toString()
    };
     await updateDoc(userRef, newData);
      alert("User updated successfully");
       navigate(-1);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

 const userDetails = [
    {
      bordered: false,
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
      ],
    },{
      bordered: true,
      fields: [
        {
          fieldType: "input",
          label: "Email Address",
          placeholder: emailAddress,
          type: "text",
          width: 8,
          id: "emailAddress",
        },
        {
          fieldType: "input",
          label: "Mobile Number",
          type: "tel",
          placeholder: mobileNumber,
          width: 4,
          id: "mobileNumber",
        },
      ]
    },
    {
      bordered: false,
      fields: [
        {
          fieldType: "input",
          label: "Password",
          type: "password",
          placeholder: password,
          width: 6,
          id: "password",
        },
        {
          fieldType: "input",
          label: "Confirm Password",
          type: "password",
          
          width: 6,
          id: "confirmPassword",
        },
      ],
    },
  ];
  const handleInputChange = (title, value) => {
    switch (title) {
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
        <Sidebar 
         isSidebarCollapsed={isSidebarCollapsed}
         toggleSidebar={toggleSidebar}/>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />
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
                        className="btn btn-green mr-2 d-flex align-items-center"
                        onClick={updateUserdata}
                      >
                        <FaArrowRight className="mr-3" />
                        <h1 className="heading">Save Changes</h1>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <form>
                <div className="row">
                  <div className="col-lg-8 mt-4">
                    <Card header="Edit User" rows={userDetails} onChange={handleInputChange} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
