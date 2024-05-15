import React from "react";
import BackButton from "../components/Shared/buttons/BackButton";

function NotFoundPage() {
  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="text-white text-center pb-5">
        <h1>404 Not Found</h1>
        <p>The page you're looking for does not exist.</p>
      </div>

      {/* <button className="btn btn-secondary" >Go Back</button> */}
      <BackButton />
    </div>
  );
}

export default NotFoundPage;
