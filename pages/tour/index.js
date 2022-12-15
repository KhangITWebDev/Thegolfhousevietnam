import React from "react";
import Footer from "../../components/footer/footer";
import HeaderTour from "../../components/HeaderTour/HeaderTour";
import TourPage from "./TourPage";

function index(props) {
  return (
    <>
      <HeaderTour />
      <TourPage />
      <Footer />
    </>
  );
}

export default index;
