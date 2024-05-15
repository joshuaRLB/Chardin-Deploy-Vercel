import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Shared/Header";
import TopBar from "../components/Shared/TopBar";
import "../css/Home.css";
import "../css/TrackOrder.css";
import trackOrderBackground from "../assets/img/OC05.png";
import TrackOrderModal from "../components/TrackOrderPage/TrackOrderModal";
import { firestore, collection, getDoc, doc } from "../api/firebaseScript"; // Import Firestore
import NotFoundImage from "../assets/not-found.webp";

const TrackOrderPage = () => {
  const navigate = useNavigate();
  const [trackingId, setTrackingId] = useState("");
  const [orderData, setOrderData] = useState(null); // State to hold order data
  const [orderNotFound, setOrderNotFound] = useState(false); // State to control modal visibility

  useEffect(() => {
    if (trackingId) {
      // Fetch order data when trackingId changes
      fetchOrderData();
    }
  }, [trackingId]);

  const handleInputChange = (event) => {
    setTrackingId(event.target.value);
  };

  const fetchOrderData = async () => {
    try {
      const orderRef = doc(firestore, "orders", trackingId);
      const orderSnap = await getDoc(orderRef);
      if (orderSnap.exists()) {
        setOrderData(orderSnap.data());
        setOrderNotFound(false); // Reset error state if order found
      } else {
        // Handle case where order doesn't exist
        setOrderNotFound(true); // Set error state
        console.log("Order not found!");
      }
    } catch (error) {
      console.error("Error fetching order:", error);
    }
  };

  const onSubmitTrackingID = () => {
    // Fetch order data when submit button is clicked
    if (trackingId) {
      fetchOrderData();
    }
  };

  return (
    <>
      <TopBar />
      <Header />
      <TrackOrderModal orderData={orderData} /> {/* Pass orderData to modal */}
      {orderNotFound && (
        <div
          className="modal fade"
          id="orderNotFoundModal"
          tabIndex="-1"
          aria-labelledby="orderNotFoundModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <img
                  src={require("../assets/not-found.webp")}
                  style={{ maxWidth: "200px", maxHeight: "200px" }}
                />
                <h2 className="text-black">Order Not Found</h2>
                <p className="text-dark">Please check the order ID and try again</p>
                <div className="pt-4 pb-3">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{
          backgroundImage: `url(${trackOrderBackground})`,
          backgroundSize: "cover", // or 'contain' for different scaling
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="container text-center">
          <div>
            <h1 style={{ fontSize: "5rem", fontWeight: "700" }}>
              Track Your Order.
            </h1>
          </div>
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control order-tracker-input border-0 text-dark"
                    placeholder="Enter your 7 digit tracking number"
                    aria-label="order-id"
                    aria-describedby="basic-addon1"
                    value={trackingId}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    className={`input-group-text rounded-end-4 bg-dark-gray d-inline-flex align-items-center justify-content-center ${
                      !trackingId && "disabled" // Disable button if trackingId is empty
                    }`}
                    id="basic-addon1"
                    style={{ cursor: "pointer" }}
                    data-bs-toggle="modal"
                    data-bs-target={
                      orderNotFound ? "#orderNotFoundModal" : "#trackOrderModal"
                    }
                    onClick={onSubmitTrackingID}
                    disabled={!trackingId} // Added disabled attribute
                  >
                    Track My Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackOrderPage;
