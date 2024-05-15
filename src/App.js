import React, { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import DesignTool from "./pages/DesignCustomizationTool";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import TrackOrderPage from "./pages/TrackOrderPage";
import OrdersPage from "./containers/Orders/OrdersPage";
import UsersPage from "./containers/components/Users/UsersPage";
import AddOrder from "./containers/Orders/AddOrder";
import EditOrder from "./containers/Orders/EditOrder";
import AddUser from "./containers/components/Users/AddUser";
import EditUser from "./containers/components/Users/EditUser";
import { auth } from './api/firebaseScript';
import Payments from "./containers/Payments/Payments";
import AddPayment from "./containers/Payments/AddPayment";
import { getAuth, signOut } from "firebase/auth"; // Import getAuth and signOut
import { Modal, Button } from 'react-bootstrap';

function App() {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [showTimeoutModal, setShowTimeoutModal] = useState(false);

  useEffect(() => {
    document.title = "Chardin Davao";
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        resetSessionTimeout();
      } else {
        localStorage.removeItem("user");
        setUser(null);
      }
    });
    
    return unsubscribe;
  }, []);

  useEffect(() => {
    const handleUserActivity = () => {
      resetSessionTimeout();
    };

    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keypress', handleUserActivity);

    return () => {
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keypress', handleUserActivity);
    };
  }, []);

  const resetSessionTimeout = () => {
    clearTimeout(window.sessionTimeout);
    clearTimeout(window.timeoutWarning);

    window.timeoutWarning = setTimeout(() => {
      setShowTimeoutModal(true);
    }, 9 * 60 * 1000); // Show warning after 9 minute

    window.sessionTimeout = setTimeout(() => {
      // Keep session active, wait for user action on modal
    }, 10 * 60 * 1000); // Wait for user choice after 10 minutes
  };

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        localStorage.removeItem("user");
        setUser(null);
        clearTimeout(window.sessionTimeout);
        clearTimeout(window.timeoutWarning);
        window.location.href = "/login"; // Redirect to login page
        console.log("User logged out successfully.");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  const handleContinueSession = () => {
    setShowTimeoutModal(false);
    resetSessionTimeout();
  };

  return (
    <div className="App text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={user ? <AdminRoutes /> : <Navigate to="/login" />} />
          <Route path="/admin/images" element={user ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/admin/payments" element={user ? <Payments /> : <Navigate to="/payments" />} />
          <Route path="/admin/payments/add-payment" element={user ? <AddPayment /> : <Navigate to="/login" />} />
          <Route path="/admin/orders" element={user ? <OrdersPage /> : <Navigate to="/login" />} />
          <Route path="/admin/orders/add-order" element={user ? <AddOrder /> : <Navigate to="/login" />} />
          <Route path="/admin/users" element={user ? <UsersPage /> : <Navigate to="/login" />} />
          <Route path="/admin/users/add-user" element={user ? <AddUser /> : <Navigate to="/login" />} />
          <Route path="/admin/orders/edit-order/:orderId" element={user ? <EditOrder /> : <Navigate to="/login" />} />
          <Route path="/admin/users/edit-user/:userID" element={user ? <EditUser /> : <Navigate to="/login" />} />
          <Route path="/design-tool" element={<DesignTool />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/track-order" element={<TrackOrderPage />} />
        </Routes>
      </BrowserRouter>

      <Modal show={showTimeoutModal} onHide={() => {}} backdrop="static">
        <Modal.Header>
          <Modal.Title>Session Timeout Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your session is about to expire. Do you want to continue your session?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={logout}>
            Logout
          </Button>
          <Button variant="primary" onClick={handleContinueSession}>
            Continue Session
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

function AdminRoutes() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="images" element={<Dashboard />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="orders/add-order" element={<AddOrder />} />
      <Route path="orders/edit-order/:orderId" element={<EditOrder />} />
      <Route path="users" element={<UsersPage />} />
      <Route path="users/add-user" element={<AddUser />} />
      <Route path="payments" element={<Payments />} />
      <Route path="payments/add-payment" element={<AddPayment />} />
    </Routes>
  );
}

export default App;
