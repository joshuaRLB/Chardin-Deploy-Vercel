import React, { useState } from "react";
import TopBar from "../components/Shared/TopBar";
import Header from "../components/Shared/Header";
import DesignToolContent from "../components/DesignCustomizationTool/DesignToolContent";
import "../css/dct-style.css";

function DesignTool() {
  return (
    <>
      <TopBar />
      <Header />
      <DesignToolContent />
    </>
  );
}

export default DesignTool;
