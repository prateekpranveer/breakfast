import React, { useState } from "react";
import AllergyPage from "./Disclaimer/AllergyPage";
import AddressPage from "./Disclaimer/AddressPage";
import DisclaimerPage from "./Disclaimer/DisclaimerPage";
import RegisterPage from "./Disclaimer/RegisterPage";


const MainApp = ({ setprime }:any) => {
  const [currentPage, setCurrentPage] = useState("disclaimer");
  const [animationClass, setAnimationClass] = useState("");

  const handlePageTransition = (page:any) => {
    setAnimationClass("animate-fade"); 
    setTimeout(() => {
      setCurrentPage(page);
      setAnimationClass("animate-fade animate-appear"); 
      setTimeout(() => {
        setAnimationClass(""); 
      }, 500);
    }, 500);
  };

  return (
    <div className="main-app">
      {currentPage === "disclaimer" && (
        <div className={`page-container ${animationClass}`}>
          <DisclaimerPage handlePageTransition={handlePageTransition} />
        </div>
      )}

      {currentPage === "address" && (
        <div className={`page-container ${animationClass}`}>
          <AddressPage handlePageTransition={handlePageTransition} />
        </div>
      )}

      {currentPage === "allergy" && (
        <div className={`page-container ${animationClass}`}>
          <AllergyPage handlePageTransition={handlePageTransition} />
        </div>
      )}
      {currentPage === "register" && (
        <div className={`page-container ${animationClass}`}>
          <RegisterPage setprime={setprime} />
        </div>
      )}
    </div>
  );
};

export default MainApp;
