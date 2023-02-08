import React from "react";
import AcademyLayout from "../../components/layout/academyLayout";
import MainLayout from "../../components/layout/mainLayout.jsx";
import ProShop from "./ProShop";

function index(props) {
  return (
    <MainLayout>
      <ProShop />
    </MainLayout>
  );
}

export default index;
