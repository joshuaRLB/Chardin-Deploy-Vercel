import React from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

class Logout extends React.Component {
  handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("User logged out successfully.");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  render() {
    const { className = "" } = this.props;

    return (
      <>
        <Link 
            className= "nav-link"
            onClick={this.handleLogout}
          >
            <i className= "bi bi-box-arrow-left"></i>
            <span>Logout</span>
          </Link>
      </>

      // <button className={className} onClick={this.handleLogout}>Logout</button>
    );
  }
}

export default Logout;
